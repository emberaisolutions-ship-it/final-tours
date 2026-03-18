# Troubleshooting Guide

## Common Issues and Solutions

### Frontend Issues

#### 1. "Cannot find module" Errors
**Error**: `Module not found: Can't resolve './components/SomeComponent'`

**Causes**:
- Component file doesn't exist
- Wrong file path or extension
- Component renamed without updating imports

**Solutions**:
1. Check the file exists: `ls src/components/SomeComponent.js`
2. Verify the import path is correct
3. Ensure file extension is `.js` or `.jsx`
4. Check for typos in component names

```javascript
// Wrong
import SomeComponent from './SomeComponent'; // If file is SomeComponent.js, this works

// Right
import SomeComponent from './SomeComponent'; // With .js
import { SomeComponent } from './SomeComponent'; // If named export
```

#### 2. Blank Page / Nothing Renders
**Causes**:
- JavaScript error preventing render
- Router not properly configured
- Component mounting issue

**Solutions**:
1. Check browser console for errors (F12)
2. Verify `BrowserRouter` is in index.js
3. Check that App component returns JSX
4. Verify Routes are properly defined

```bash
# Check for runtime errors
# Open DevTools: F12 → Console tab
# Look for red error messages
```

#### 3. Routes Not Working
**Error**: Pages not loading, stuck on home page

**Causes**:
- Routes not properly configured
- useNavigate hook not working
- Incorrect route paths

**Solutions**:
1. Verify React Router v6 syntax in App.js:
```javascript
// Correct v6 syntax
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
```

2. Check useNavigate usage:
```javascript
const navigate = useNavigate();
// Use navigate(), not history.push()
navigate('/about');
```

#### 4. Environment Variables Not Working
**Error**: `process.env.REACT_APP_*` is undefined

**Causes**:
- Variable doesn't exist in `.env.local`
- Variable missing `REACT_APP_` prefix
- `.env.local` not reloaded after changes

**Solutions**:
1. Verify `.env.local` exists in project root
2. Check variable has `REACT_APP_` prefix:
```env
# Right
REACT_APP_API_URL=https://...

# Wrong
API_URL=https://...  # Missing REACT_APP_ prefix
REACT_APP_API_URL=https://...  # Has prefix, but not visible in backend
```

3. Restart dev server after changing `.env.local`
```bash
npm start  # Restart to load new env vars
```

4. Verify in code:
```javascript
console.log(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
// If undefined, check .env.local
```

#### 5. EmailJS Not Sending
**Error**: "Failed to send message" when submitting form

**Causes**:
- Missing environment variables
- Invalid EmailJS credentials
- Network error reaching EmailJS

**Solutions**:
1. Verify EmailJS environment variables in `.env.local`:
```env
REACT_APP_EMAILJS_SERVICE_ID=service_...
REACT_APP_EMAILJS_TEMPLATE_ID_CONTACT=template_...
REACT_APP_EMAILJS_PUBLIC_KEY=BXE-...
```

2. Check EmailJS dashboard:
   - Verify service ID exists
   - Verify template ID exists
   - Verify public key is correct

3. Test in browser console:
```javascript
// Check env vars are loaded
console.log(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

// Should output your key, not undefined
```

4. Check network tab in DevTools for API errors

#### 6. Styles Not Applying (Tailwind CSS)
**Error**: Classes like `bg-blue-500` not being applied

**Causes**:
- Tailwind CSS not properly built
- CSS not imported
- Class names not recognized

**Solutions**:
1. Ensure `index.css` imports Tailwind:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

2. Restart dev server:
```bash
npm start
```

3. Check tailwind.config.js includes template paths:
```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
}
```

#### 7. CORS Error (Access-Control-Allow-Origin)
**Error**: "Access to XMLHttpRequest blocked by CORS policy"

**Causes**:
- Backend not allowing frontend origin
- Incorrect API URL
- Backend CORS not configured

**Solutions**:
1. Verify backend `.env` ALLOWED_ORIGINS:
```env
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001
```

2. Check API_BASE_URL in frontend `.env.local`:
```env
REACT_APP_API_BASE_URL=http://localhost:5000
```

3. Ensure backend is running:
```bash
cd backend
npm start
# Should see: Server running on port 5000
```

### Backend Issues

#### 1. Port Already in Use
**Error**: `Error: listen EADDRINUSE :::5000`

**Solution**:
```bash
# Find and kill process using port 5000
# On Linux/Mac
lsof -i :5000
kill -9 <PID>

# On Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Or change port
PORT=5001 npm start
```

#### 2. Environment Variables Not Loading
**Error**: API calls fail silently

**Solutions**:
1. Verify `.env` file exists in backend directory
2. Check syntax (no spaces around `=`):
```env
# Right
PORT=5000
API_KEY=your_key_here

# Wrong
PORT = 5000  # Spaces break it
API_KEY=your key here  # Spaces in value need quotes
```

3. Verify variables are being used:
```javascript
const PORT = process.env.PORT || 5000;
console.log('PORT:', PORT);  // Check it's loaded
```

#### 3. API Calls Failing
**Error**: "Failed to fetch" or timeout errors

**Causes**:
- External API rate limit exceeded
- Invalid API key
- Network connectivity issue

**Solutions**:
1. Check API key is valid
2. Verify RapidAPI subscription is active
3. Check rate limits haven't been exceeded
4. Verify network connectivity:
```bash
curl -X GET https://trueway-places.p.rapidapi.com/FindPlacesNearby
```

#### 4. Translation API Not Working
**Error**: Translation requests fail

**Solutions**:
1. MyMemory API is free but has limits (1000 words/day for anonymous)
2. Add email for increased limits:
```env
MYMEMORY_EMAIL=your-email@example.com
```

3. Check requests are properly formatted in TranslationContext.js

#### 5. CORS Error (Backend Perspective)
**Error**: Frontend gets CORS error

**Solutions**:
1. Update backend `.env`:
```env
ALLOWED_ORIGINS=http://localhost:3000,https://yourdomain.com
```

2. Verify CORS middleware is enabled in server.js

3. Restart backend after changing ALLOWED_ORIGINS

### General Troubleshooting Steps

#### 1. Clear Cache
```bash
# Clear npm cache
npm cache clean --force

# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Restart dev server
npm start
```

#### 2. Check Logs
- **Frontend**: Open DevTools (F12) → Console tab
- **Backend**: Check terminal output
- **Network**: DevTools → Network tab → find failed requests

#### 3. Restart Everything
```bash
# Terminal 1: Stop backend (Ctrl+C)
cd backend
npm install
npm start

# Terminal 2: Stop frontend (Ctrl+C)
npm install
npm start
```

#### 4. Verify Setup
```bash
# Check Node version (should be 16+)
node --version

# Check npm version
npm --version

# Verify backend is running
curl http://localhost:5000/api/places

# Check frontend port
# Open http://localhost:3000 in browser
```

#### 5. Enable Debug Logging
Add temporary logging to diagnose issues:

```javascript
// Frontend
console.log("[v0] Component mounted");
console.log("[v0] API response:", data);
console.log("[v0] Environment:", process.env);

// Backend
console.log("[v0] Request received:", req.body);
console.log("[v0] API Response:", response.data);
```

### Getting More Help

1. **Check console errors first** - Most issues are obvious in console
2. **Check `.env` files** - Missing or incorrect env vars cause many issues
3. **Verify services are running** - Both frontend and backend must be active
4. **Check network tab** - See actual API requests and responses
5. **Read error messages carefully** - They often point to the exact issue

### Useful Debug Commands

```bash
# Test API endpoint
curl -X GET http://localhost:5000/api/places

# Check if port is in use
lsof -i :3000  # Frontend
lsof -i :5000  # Backend

# Check environment variables are set
echo $REACT_APP_EMAILJS_PUBLIC_KEY

# View backend logs with more detail
NODE_ENV=development npm start
```

### Still Stuck?

1. Check the SECURITY.md, API.md, and SETUP.md files
2. Review error messages in both frontend and backend console
3. Verify all environment variables are correctly set
4. Ensure all dependencies are installed: `npm install`
5. Try restarting both frontend and backend
