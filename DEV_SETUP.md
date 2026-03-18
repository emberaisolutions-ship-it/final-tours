# Development Setup Guide

This guide helps you set up and run the Final Tours application in development mode.

## Quick Start

### Option 1: Frontend Only (Recommended for UI Development)

```bash
npm install
npm start
```

This will start the React development server at `http://localhost:3000`. The app will automatically reload when you make changes.

### Option 2: Full Stack Development (Frontend + Backend)

```bash
npm install
npm run setup
npm run full-dev
```

This runs both the React frontend (port 3000) and Express backend (port 5000) in parallel with hot-reload enabled.

### Option 3: Run Services Separately

**Terminal 1 - Frontend:**
```bash
npm install
npm run dev
```

**Terminal 2 - Backend:**
```bash
npm run backend:dev
```

---

## Available npm Scripts

### Frontend Scripts

| Command | Purpose |
|---------|---------|
| `npm start` | Start React dev server (port 3000) |
| `npm run dev` | Alias for `npm start` |
| `npm run build` | Create production build |
| `npm test` | Run tests (if configured) |
| `npm run backend` | Start backend server in production mode |
| `npm run backend:dev` | Start backend with hot-reload |
| `npm run full-dev` | Run frontend + backend together |
| `npm run setup` | Install all dependencies (frontend + backend) |

### Backend Scripts

The backend server (`backend/server.js`) has its own scripts:

| Command | Purpose |
|---------|---------|
| `npm start` | Run backend server |
| `npm run dev` | Run with file watching (auto-restart on changes) |

---

## Development Workflow

### 1. Initial Setup

```bash
npm run setup
```

This installs dependencies for both frontend and backend.

### 2. Start Development

Choose based on what you're working on:

**For UI/Frontend Changes:**
```bash
npm start
```

**For Full Stack Development:**
```bash
npm run full-dev
```

### 3. Environment Variables

Create `.env.local` in the root directory with frontend variables:
```
REACT_APP_API_BASE_URL=http://localhost:5000
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID_CONTACT=your_template_id
REACT_APP_EMAILJS_TEMPLATE_ID_BOOKING=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Create `backend/.env` with backend variables:
```
PORT=5000
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001
RAPID_API_KEY=your_rapid_api_key
GOOGLE_API_KEY=your_google_api_key
SEARCH_ENGINE_ID=your_search_engine_id
```

See `.env.example` and `backend/.env.example` for full configuration options.

---

## Port Configuration

- **Frontend**: `http://localhost:3000`
- **Backend**: `http://localhost:5000`
- **API Base URL**: `http://localhost:5000` (configured in `.env.local`)

---

## Troubleshooting

### Port Already in Use

If port 3000 or 5000 is already in use:

**Kill process on port 3000:**
```bash
lsof -ti:3000 | xargs kill -9
```

**Kill process on port 5000:**
```bash
lsof -ti:5000 | xargs kill -9
```

### Backend Not Starting

1. Check that Node.js is installed: `node --version`
2. Ensure `.env` file exists in `backend/` directory
3. Check API keys are set in `backend/.env`
4. Run `npm install` in both directories

### API Calls Failing

1. Verify backend is running on port 5000
2. Check `REACT_APP_API_BASE_URL` in `.env.local`
3. Review backend logs for errors
4. Ensure CORS is properly configured

### Hot Reload Not Working

Try clearing npm cache and reinstalling:
```bash
npm cache clean --force
rm -rf node_modules
npm install
```

---

## Development Tips

1. **Hot Reload**: Changes to React components automatically refresh the browser
2. **Console Logs**: Use browser DevTools (F12) to see frontend logs
3. **Backend Logs**: Check terminal where backend is running for API logs
4. **React DevTools**: Install React DevTools browser extension for debugging

---

## Building for Production

```bash
npm run build
```

Creates optimized build in `build/` directory. Test it locally:
```bash
npx serve -s build
```

---

## Next Steps

- Review `DEVELOPER_GUIDE.md` for coding standards
- Check `QUICK_START.md` for project overview
- See `TROUBLESHOOTING.md` for common issues
