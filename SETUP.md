# Final Tours - Setup Guide

## Overview
Final Tours is a full-stack React application for safari and tour booking management. It consists of:
- **Frontend**: React 18 + React Router v6 + Tailwind CSS
- **Backend**: Express.js with Node.js

## Prerequisites
- Node.js 16+ 
- npm or yarn
- Backend server running (Render or local)

## Frontend Setup

### 1. Install Dependencies
```bash
npm install
# or
yarn install
```

### 2. Environment Configuration
Create a `.env.local` file in the project root with the following variables:

```env
# EmailJS Configuration
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID_CONTACT=your_contact_template_id
REACT_APP_EMAILJS_TEMPLATE_ID_BOOKING=your_booking_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key

# API Configuration
REACT_APP_API_BASE_URL=https://your-backend-url.com

# Translation (Optional)
REACT_APP_MYMEMORY_EMAIL=your-email@example.com
```

**Note**: Copy `.env.example` as a template if needed.

### 3. Run Development Server
```bash
npm start
# or
yarn start
```

The app will run on `http://localhost:3000`

## Backend Setup

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Environment Configuration
Update `backend/.env` with your credentials:

```env
PORT=5000
RAPID_API_KEY=your_rapid_api_key
GOOGLE_API_KEY=your_google_api_key
SEARCH_ENGINE_ID=your_search_engine_id
MYMEMORY_EMAIL=your-email@example.com
```

**Note**: Copy `backend/.env.example` as a template.

### 3. Run Backend Server
```bash
npm start
# or for development with auto-reload
npm run dev
```

The backend will run on `http://localhost:5000`

## Important Notes

### React Router v6 Migration
The application has been updated to React Router v6. Key changes:
- `HashRouter` → `BrowserRouter` (clean URLs)
- `Switch` → `Routes`
- `useHistory()` → `useNavigate()`
- Route `component` prop → `element` prop

### Security
- **Never commit `.env` files** - they contain sensitive credentials
- Credentials are loaded from environment variables at runtime
- Always use `process.env.REACT_APP_*` for frontend variables
- Backend uses `process.env.*` for sensitive data

### API Endpoints
- `/api/places` - Fetch places data
- `/api/translate` - Translation service
- `/search` - Search functionality
- Additional endpoints documented in backend code

## Troubleshooting

### Port Already in Use
If port 3000 or 5000 is in use:
```bash
# Change frontend port
PORT=3001 npm start

# Change backend port
PORT=5001 npm start (in backend directory)
```

### CORS Issues
Make sure the backend CORS configuration includes your frontend URL.

### Missing Environment Variables
- Check that all required variables in `.env.example` are present in `.env.local`
- Verify no typos in variable names
- Frontend vars must start with `REACT_APP_`

## Build for Production

### Frontend
```bash
npm run build
# Creates optimized build in /build directory
```

### Backend
Ensure all environment variables are set in production environment before deploying.

## Additional Resources
- React Router v6: https://reactrouter.com/en/main
- Tailwind CSS: https://tailwindcss.com/
- React Documentation: https://react.dev/
