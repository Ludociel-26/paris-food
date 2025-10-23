# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Frontend (React with Create React App + CRACO)
```bash
# Navigate to frontend directory first
cd frontend

# Development
yarn start          # Start development server on http://localhost:3000
yarn build         # Build for production
yarn test          # Run tests in watch mode

# Linting (available via package.json)
npx eslint src/    # Manual linting check
```

### Backend (FastAPI + Python)
```bash
# Navigate to backend directory first
cd backend

# Development
pip install -r requirements.txt    # Install dependencies
uvicorn server:app --reload       # Start dev server with hot reload
uvicorn server:app --host 0.0.0.0 --port 8000  # Production-like server

# Code quality tools (available in requirements.txt)
black .            # Format code
isort .            # Sort imports
flake8 .           # Lint code
mypy .             # Type checking
pytest             # Run tests
```

### Testing
This project uses a specialized testing protocol with `test_result.md` for agent communication. When implementing changes:
1. Update `test_result.md` with implementation details before testing
2. Set `needs_retesting: true` for tasks requiring validation
3. Use the testing agent if available for comprehensive testing

## Architecture Overview

### Frontend Architecture
- **Framework**: React 19 with Create React App + CRACO for customization
- **Routing**: React Router DOM with BrowserRouter for client-side navigation
- **UI Library**: Radix UI primitives with Tailwind CSS for styling
- **State Management**: Context API for theme and language management
- **Internationalization**: Custom language context supporting French (default), English, and Spanish
- **Build System**: CRACO with custom webpack configuration for path aliases and optional features

**Key Features**:
- Service Worker registration for offline functionality
- Dark/light/system theme support with localStorage persistence
- Multi-language support with localStorage persistence
- Custom webpack configuration with conditional plugin loading
- Path alias `@/` pointing to `src/` directory

**Pages Structure**:
- HomePage - Landing page
- MenuPageNew - Menu display (appears to be newer version)
- LocationPage - Restaurant location information
- GalleryPage - Image gallery
- SocialPage - Social media integration

### Backend Architecture
- **Framework**: FastAPI with async/await support
- **Database**: MongoDB with Motor (async driver)
- **API Structure**: RESTful API with `/api` prefix using APIRouter
- **Models**: Pydantic models with automatic validation
- **CORS**: Configured for cross-origin requests
- **Environment**: Uses python-dotenv for configuration

**Key Components**:
- Status tracking system with MongoDB persistence
- UUID-based document IDs
- Timezone-aware datetime handling
- Automatic MongoDB `_id` field exclusion in responses
- Comprehensive logging configuration

### Project Structure
```
paris-food/
├── frontend/          # React application
│   ├── src/
│   │   ├── components/   # Reusable UI components (mostly Radix UI)
│   │   ├── contexts/     # Theme and Language contexts
│   │   ├── pages/        # Route components
│   │   └── utils/        # Utility functions (notifications, offline storage)
│   ├── craco.config.js   # Custom webpack configuration
│   └── tailwind.config.js # Tailwind CSS configuration
├── backend/           # FastAPI server
│   ├── server.py      # Main application entry point
│   └── requirements.txt # Python dependencies
└── tests/            # Test files (minimal structure)
```

### Environment Configuration
Both frontend and backend use `.env` files for configuration:
- **Backend**: `MONGO_URL`, `DB_NAME`, `CORS_ORIGINS`
- **Frontend**: Custom environment variables for feature flags (visual edits, health check, hot reload)

### Development Patterns
- **Component Libraries**: Heavy use of Radix UI for accessible components
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **API Communication**: Axios for HTTP requests
- **Form Handling**: React Hook Form with Zod validation
- **Date Handling**: date-fns library
- **Icons**: Lucide React icons

### Special Configuration Notes
- CRACO config includes conditional plugin loading for visual editing and health checking features
- Webpack configuration supports disabling hot reload via environment variables
- Frontend uses yarn as package manager (specified in package.json)
- Backend includes comprehensive development tooling (black, isort, flake8, mypy, pytest)

## Testing Agent Protocol
This repository includes a specialized testing protocol managed through `test_result.md`. When making changes:
- Always update the test results file with implementation status
- Follow the YAML format specified in the testing protocol section
- Use the testing agent for comprehensive validation when available
- Track stuck tasks and prioritize fixes based on the test plan

## Key Dependencies
- **Frontend**: React 19, React Router 7.5, Radix UI components, Tailwind CSS, Axios
- **Backend**: FastAPI 0.110, Motor 3.3 (MongoDB), Pydantic 2.6+, Python-dotenv
- **Development**: ESLint, Tailwind CSS, CRACO, Black, isort, flake8, mypy, pytest