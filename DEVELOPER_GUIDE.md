# Developer Guide - Final Tours Website

## Quick Start

### Installation
```bash
# Install dependencies
npm install

# Install backend dependencies
cd backend
npm install
cd ..

# Set up environment variables
cp .env.example .env.local
cp backend/.env.example backend/.env
# Fill in your API keys in both files
```

### Running the Project
```bash
# Terminal 1: Start frontend
npm start

# Terminal 2: Start backend
cd backend
npm start
```

The frontend will run on `http://localhost:3000`
The backend will run on `http://localhost:5000`

---

## Project Structure

```
final-tours/
├── src/
│   ├── components/          # React components
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Tour components (MaasaiMara.js, etc.)
│   │   ├── ui/              # UI component library
│   │   ├── utils/           # Utility functions
│   │   └── shiftedfrommain/ # Assets folder
│   ├── App.js               # Main app routing
│   ├── index.js             # Entry point
│   └── *.css                # Global styles
│
├── backend/
│   ├── server.js            # Express server
│   ├── .env                 # Backend environment variables
│   └── .env.example         # Template for .env
│
├── public/                  # Static files
├── package.json             # Frontend dependencies
└── postcss.config.js        # PostCSS configuration
```

---

## Recent Changes (Cleanup Phase)

### What Was Removed
1. **Unused Components** (5):
   - BookingComponent.js
   - Flow.js
   - CSSBookingFlow.js
   - BookingForm.js
   - SimpleLanguageSwitcher.js (duplicate)

2. **Unused Files** (6):
   - BookingComponent.css
   - App.test.js
   - setupTests.js
   - SEO.js (replaced by react-helmet-async)
   - src/postcss.config.js (moved to root)

3. **Removed Dependencies**:
   - jaro-winkler
   - node-cache
   - node-fetch
   - All unused @babel packages
   - @shadcn/ui (pre-release)
   - react-reveal
   - react-typical
   - react-speech-kit

4. **Updated Dependencies**:
   - react-router-dom: v5 → v6 (BrowserRouter, Routes, useNavigate)

---

## Development Guidelines

### Component Structure
```javascript
// Good component structure
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MyComponent({ prop1, prop2 }) {
  const [state, setState] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Load data
  }, []);

  return (
    <div>
      {/* Component JSX */}
    </div>
  );
}

export default MyComponent;
```

### Styling
- **Use Tailwind CSS** for all new styles
- **Avoid inline styles** (except for dynamic values)
- **Use CSS classes** for reusable patterns
- **Global CSS** in `src/index.css` only for global rules

```javascript
// Good: Use Tailwind
<div className="flex items-center justify-between p-4 bg-white rounded-lg">

// Avoid: Inline styles
<div style={{ display: 'flex', justifyContent: 'space-between' }}>
```

### API Calls
- Use the `usePlacesData` hook as a template
- Always handle errors
- Use environment variables for API URLs

```javascript
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

async function fetchData(endpoint) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) throw new Error(`API Error: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('[v0] Error:', error);
    throw error;
  }
}
```

### Environment Variables
**Frontend** (`.env.local`):
```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID_CONTACT=your_template_id
REACT_APP_EMAILJS_TEMPLATE_ID_BOOKING=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
REACT_APP_API_BASE_URL=http://localhost:5000
```

**Backend** (`backend/.env`):
```
PORT=5000
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001
RAPID_API_KEY=your_api_key
GOOGLE_API_KEY=your_api_key
SEARCH_ENGINE_ID=your_search_engine_id
```

---

## Routing

### Current Routes (React Router v6)
```javascript
// App.js uses Routes (not Switch)
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/maasai-mara" element={<MaasaiMara />} />
  {/* etc... */}
</Routes>
```

### Navigation
```javascript
// Use useNavigate hook (not useHistory)
import { useNavigate } from 'react-router-dom';

function Component() {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/path');
  };
  
  return <button onClick={handleClick}>Go</button>;
}
```

### Links
```javascript
// Use Link component
import { Link } from 'react-router-dom';

<Link to="/about">About Us</Link>
```

---

## Email Setup (EmailJS)

### Configuration
Already set up in:
- ContactForm.js
- CalendarComponent.js

### To change email templates:
1. Go to [emailjs.com](https://www.emailjs.com)
2. Update service ID, template ID, and public key
3. Update `.env.local` with new values
4. Restart the app

---

## Common Tasks

### Add a New Page
1. Create component in `src/components/NewPage.js`
2. Import in `src/App.js`
3. Add route:
   ```javascript
   <Route path="/new-page" element={<NewPage />} />
   ```
4. Add link in Navbar if needed

### Add an API Endpoint (Backend)
```javascript
// backend/server.js
app.get('/api/new-endpoint', async (req, res) => {
  try {
    // Your logic here
    res.json({ data: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

### Call the API (Frontend)
```javascript
useEffect(() => {
  fetch(`${API_BASE_URL}/api/new-endpoint`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}, []);
```

### Add Styling
```javascript
// Use Tailwind classes
<div className="p-4 bg-gray-100 rounded-lg shadow-md">
  <h2 className="text-xl font-bold text-gray-800">Title</h2>
  <p className="text-gray-600 mt-2">Description</p>
</div>
```

---

## Debugging

### Frontend
```javascript
// Use console with [v0] prefix for your logs
console.log('[v0] Debug message:', variable);
console.error('[v0] Error occurred:', error);

// React DevTools Chrome Extension for component inspection
// Redux DevTools for state inspection
```

### Backend
```bash
# Run with debug output
DEBUG=* npm start

# Check logs for errors
```

### Network Issues
1. Open DevTools (F12)
2. Go to Network tab
3. Reproduce the issue
4. Check request/response headers and body

---

## Testing

### Manual Testing Checklist
- [ ] All routes navigate correctly
- [ ] Forms submit data properly
- [ ] API calls show data
- [ ] Mobile responsive design works
- [ ] Images load correctly
- [ ] Email sending works
- [ ] No console errors

---

## Performance Tips

### Optimization Best Practices
1. **Lazy load components** for routes not immediately needed
2. **Memoize expensive computations** with `useMemo`
3. **Use `useCallback`** for event handlers passed to children
4. **Avoid unnecessary re-renders** with proper dependency arrays
5. **Optimize images** - use compressed/WebP formats
6. **Code splitting** - see `OPTIMIZATION.md`

---

## Security Notes

### ✅ Already Implemented
- Credentials in environment variables (not hardcoded)
- CORS restrictions on backend
- Input validation where needed
- No sensitive data in console logs

### Additional Measures to Consider
- Rate limiting on API endpoints
- SQL injection protection (if using database)
- CSRF protection for forms
- Helmet.js for security headers

---

## Dependencies Overview

### Core
- **react** & **react-dom** - UI framework
- **react-router-dom** v6 - Client-side routing
- **tailwindcss** - Utility CSS framework

### Forms & Data
- **react-datepicker** - Date selection
- **react-calendar** - Calendar widget
- **react-calendly** - Calendar integration
- **axios** - HTTP client

### Maps & Location
- **react-leaflet** - Map rendering
- **leaflet-geosearch** - Location search
- **@react-google-maps/api** - Google Maps integration

### UI & Animation
- **framer-motion** - Animations
- **lucide-react** - Icons
- **react-icons** - More icons
- **react-transition-group** - CSS transitions

### Email & Forms
- **@emailjs/browser** - Email sending
- **react-helmet-async** - SEO meta tags

### Development
- **react-scripts** - Build tools
- **postcss** - CSS processing
- **tailwindcss** - CSS framework

---

## Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

### Deploy Frontend
- Push to GitHub
- Connect to Vercel
- Automatic deployment on push

### Deploy Backend
- Push to GitHub
- Deploy to Render, Heroku, or AWS
- Update `.env` with production URLs

---

## Troubleshooting

### App Won't Start
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm start
```

### API Calls Failing
- Check `.env` variables are set
- Verify backend is running
- Check CORS settings
- Review network tab in DevTools

### Styling Not Applied
- Make sure to use Tailwind classes
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server
- Check class names are spelled correctly

### Build Errors
```bash
# Check for linting issues
npm run build -- --verbose

# Fix issues and rebuild
npm run build
```

---

## Resources

- **React**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **React Router**: https://reactrouter.com
- **Framer Motion**: https://www.framer.com/motion
- **EmailJS**: https://www.emailjs.com

---

## Support

For issues or questions:
1. Check this guide
2. Review code comments
3. Check browser console for errors
4. Review network requests in DevTools
5. Check project issues on GitHub

---

**Last Updated**: Post-Cleanup Phase
**Version**: 2.0 (Cleaned & Optimized)
