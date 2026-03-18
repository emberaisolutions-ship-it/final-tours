# Quick Start Guide

## Get Up and Running in 5 Minutes

### 1. Setup Frontend

```bash
# Install dependencies
npm install

# Create .env.local
cp .env.example .env.local

# Edit .env.local with your EmailJS credentials
# REACT_APP_EMAILJS_SERVICE_ID=your_service_id
# REACT_APP_EMAILJS_TEMPLATE_ID_CONTACT=your_template_id
# REACT_APP_EMAILJS_TEMPLATE_ID_BOOKING=your_booking_template_id
# REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
# REACT_APP_API_BASE_URL=http://localhost:5000

# Start development server
npm start
# Opens http://localhost:3000
```

### 2. Setup Backend (in another terminal)

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Update .env
# Edit .env with your API keys:
# RAPID_API_KEY=your_rapid_api_key
# GOOGLE_API_KEY=your_google_api_key
# SEARCH_ENGINE_ID=your_search_engine_id
# ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001

# Start backend
npm start
# Backend runs on http://localhost:5000
```

### 3. Verify Everything Works

- Frontend: http://localhost:3000 (should load with no errors)
- Backend: http://localhost:5000/api/places (should return JSON data)
- Form submission should send emails via EmailJS

---

## Key Files

| File | Purpose |
|------|---------|
| `.env.example` | Frontend env template |
| `backend/.env.example` | Backend env template |
| `SETUP.md` | Detailed setup instructions |
| `API.md` | API documentation |
| `SECURITY.md` | Security guidelines |
| `TROUBLESHOOTING.md` | Common issues & fixes |
| `FIXES_SUMMARY.md` | What was fixed |

---

## Environment Variables Quick Reference

### Frontend (.env.local)
```env
REACT_APP_EMAILJS_SERVICE_ID=
REACT_APP_EMAILJS_TEMPLATE_ID_CONTACT=
REACT_APP_EMAILJS_TEMPLATE_ID_BOOKING=
REACT_APP_EMAILJS_PUBLIC_KEY=
REACT_APP_API_BASE_URL=http://localhost:5000
```

### Backend (.env)
```env
PORT=5000
RAPID_API_KEY=
GOOGLE_API_KEY=
SEARCH_ENGINE_ID=
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001
```

---

## Port Configuration

| Service | Default Port | Environment Variable |
|---------|--------------|----------------------|
| Frontend | 3000 | PORT=3001 npm start |
| Backend | 5000 | PORT=5001 npm start |

---

## Useful Commands

```bash
# Frontend
npm start           # Start dev server
npm build           # Create production build
npm test            # Run tests (if configured)

# Backend
npm start           # Start server
npm run dev         # Start with auto-reload
npm install         # Install dependencies

# Clean slate
rm -rf node_modules package-lock.json
npm install
npm start
```

---

## Common Issues

| Issue | Solution |
|-------|----------|
| "Cannot find module" | Run `npm install` |
| Blank page | Check browser console (F12) |
| 404 errors on routes | Ensure backend is running |
| "REACT_APP_* is undefined" | Check .env.local exists and restart dev server |
| CORS errors | Verify ALLOWED_ORIGINS in backend .env |
| EmailJS not sending | Verify credentials in .env.local |

For more details, see `TROUBLESHOOTING.md`

---

## Project Structure

```
final-tours/
├── public/              # Static files
├── src/
│   ├── components/      # React components
│   ├── App.js          # Main app (routes v6)
│   ├── index.js        # Entry point (BrowserRouter)
│   └── index.css       # Tailwind CSS
├── backend/            # Express.js server
│   ├── server.js       # Main server file
│   └── .env            # Backend config
├── .env.example        # Frontend config template
├── .gitignore          # Git ignore rules
├── SETUP.md            # Detailed setup
├── SECURITY.md         # Security guide
├── API.md              # API docs
└── TROUBLESHOOTING.md  # Common issues
```

---

## What's Changed

This project has been updated with:
- ✓ React Router v6 (modern routing)
- ✓ Secure credential management (env variables)
- ✓ Consolidated components (no duplicates)
- ✓ Clean code (removed dead code and logs)
- ✓ Better CORS security
- ✓ Comprehensive documentation

See `FIXES_SUMMARY.md` for complete details.

---

## Next Steps

1. Copy `.env.example` to `.env.local` and add your credentials
2. Copy `backend/.env.example` to `backend/.env` and add your API keys
3. Run `npm install` in both directories
4. Start frontend with `npm start`
5. Start backend with `cd backend && npm start`
6. Visit http://localhost:3000

Need help? See `TROUBLESHOOTING.md` or `SETUP.md`
