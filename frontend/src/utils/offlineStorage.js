// IndexedDB utilities for offline storage

const DB_NAME = 'AtmosphereJoyeuseDB';
const DB_VERSION = 1;
const RESERVATIONS_STORE = 'reservations';
const FEEDBACK_STORE = 'feedback';
const ORDERS_STORE = 'orders';

let db = null;

export const initDB = () => {
  return new Promise((resolve, reject) => {
    if (db) {
      resolve(db);
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      db = request.result;
      resolve(db);
    };

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      // Create object stores if they don't exist
      if (!db.objectStoreNames.contains(RESERVATIONS_STORE)) {
        const reservationStore = db.createObjectStore(RESERVATIONS_STORE, { keyPath: 'id', autoIncrement: true });
        reservationStore.createIndex('synced', 'synced', { unique: false });
        reservationStore.createIndex('timestamp', 'timestamp', { unique: false });
      }

      if (!db.objectStoreNames.contains(FEEDBACK_STORE)) {
        const feedbackStore = db.createObjectStore(FEEDBACK_STORE, { keyPath: 'id', autoIncrement: true });
        feedbackStore.createIndex('synced', 'synced', { unique: false });
        feedbackStore.createIndex('timestamp', 'timestamp', { unique: false });
      }

      if (!db.objectStoreNames.contains(ORDERS_STORE)) {
        const orderStore = db.createObjectStore(ORDERS_STORE, { keyPath: 'id', autoIncrement: true });
        orderStore.createIndex('synced', 'synced', { unique: false });
        orderStore.createIndex('timestamp', 'timestamp', { unique: false });
      }
    };
  });
};

// Generic add function
const addItem = async (storeName, item) => {
  const database = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction([storeName], 'readwrite');
    const store = transaction.objectStore(storeName);
    const request = store.add({
      ...item,
      synced: false,
      timestamp: Date.now()
    });

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

// Generic get all function
const getAllItems = async (storeName, unsyncedOnly = false) => {
  const database = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction([storeName], 'readonly');
    const store = transaction.objectStore(storeName);
    
    let request;
    if (unsyncedOnly) {
      const index = store.index('synced');
      request = index.getAll(false);
    } else {
      request = store.getAll();
    }

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

// Generic update function
const updateItem = async (storeName, id, updates) => {
  const database = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction([storeName], 'readwrite');
    const store = transaction.objectStore(storeName);
    const getRequest = store.get(id);

    getRequest.onsuccess = () => {
      const item = getRequest.result;
      if (item) {
        const updatedItem = { ...item, ...updates };
        const updateRequest = store.put(updatedItem);
        updateRequest.onsuccess = () => resolve(updatedItem);
        updateRequest.onerror = () => reject(updateRequest.error);
      } else {
        reject(new Error('Item not found'));
      }
    };
    getRequest.onerror = () => reject(getRequest.error);
  });
};

// Generic delete function
const deleteItem = async (storeName, id) => {
  const database = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction([storeName], 'readwrite');
    const store = transaction.objectStore(storeName);
    const request = store.delete(id);

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
};

// Reservation functions
export const addReservation = (reservation) => addItem(RESERVATIONS_STORE, reservation);
export const getAllReservations = (unsyncedOnly = false) => getAllItems(RESERVATIONS_STORE, unsyncedOnly);
export const updateReservation = (id, updates) => updateItem(RESERVATIONS_STORE, id, updates);
export const deleteReservation = (id) => deleteItem(RESERVATIONS_STORE, id);

// Feedback functions
export const addFeedback = (feedback) => addItem(FEEDBACK_STORE, feedback);
export const getAllFeedback = (unsyncedOnly = false) => getAllItems(FEEDBACK_STORE, unsyncedOnly);
export const updateFeedback = (id, updates) => updateItem(FEEDBACK_STORE, id, updates);
export const deleteFeedback = (id) => deleteItem(FEEDBACK_STORE, id);

// Order functions
export const addOrder = (order) => addItem(ORDERS_STORE, order);
export const getAllOrders = (unsyncedOnly = false) => getAllItems(ORDERS_STORE, unsyncedOnly);
export const updateOrder = (id, updates) => updateItem(ORDERS_STORE, id, updates);
export const deleteOrder = (id) => deleteItem(ORDERS_STORE, id);

// Background sync helper
export const syncWithServer = async (storeName, endpoint) => {
  const unsyncedItems = await getAllItems(storeName, true);
  
  const syncPromises = unsyncedItems.map(async (item) => {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item)
      });

      if (response.ok) {
        await updateItem(storeName, item.id, { synced: true });
        return { success: true, id: item.id };
      } else {
        return { success: false, id: item.id, error: 'Server error' };
      }
    } catch (error) {
      return { success: false, id: item.id, error: error.message };
    }
  });

  return Promise.all(syncPromises);
};