# Security Guidelines

## Overview
This document outlines security best practices for the Final Tours application.

## Environment Variables

### Never Commit Secrets
- `.env` files are in `.gitignore` for a reason
- Use `.env.example` as a template
- Each environment (dev, staging, prod) needs its own `.env`

### Environment Variable Categories

#### Frontend Variables (REACT_APP_*)
- Used in client-side code
- Visible in browser
- Should not contain highly sensitive data
- Example: `REACT_APP_EMAILJS_PUBLIC_KEY` (public keys are okay)

#### Backend Variables
- Loaded server-side only
- Never exposed to client
- Store all API keys and sensitive data here
- Example: `RAPID_API_KEY`, `GOOGLE_API_KEY`

## Credentials Management

### Current Setup
- EmailJS credentials: Moved to environment variables
- API Keys: Use backend .env file only
- Database credentials: Should use environment variables

### For Production
1. Use a secrets management service:
   - AWS Secrets Manager
   - Azure Key Vault
   - HashiCorp Vault
   - GitHub Secrets (for CI/CD)

2. Implement secret rotation policies

3. Use separate credentials per environment

## API Security

### CORS Configuration
The backend now implements proper CORS:
```javascript
const allowedOrigins = process.env.ALLOWED_ORIGINS.split(',');
```

**Configuration:**
- Development: `http://localhost:3000,http://localhost:3001`
- Production: Only your domain(s)

### API Key Protection
- Never expose API keys in frontend code
- Always proxy external API calls through backend
- Use environment variables for all keys
- Rotate keys regularly

### Rate Limiting
Currently not implemented. For production, add:
```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);
```

## Authentication & Authorization

### Current Status
- No authentication required for API endpoints
- All endpoints are publicly accessible

### Recommended Improvements
1. Implement authentication for booking endpoints
2. Add user session management
3. Use secure HTTP-only cookies for sessions
4. Implement CSRF protection

### Example Implementation
```javascript
// Validate user authentication before allowing bookings
app.post('/api/bookings', requireAuth, (req, res) => {
  // Protected endpoint logic
});
```

## Input Validation

### Data Validation
All user inputs should be validated:
- Email addresses
- Phone numbers
- Dates
- Search queries

### Example
```javascript
const { email, phone } = req.body;

// Validate email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  return res.status(400).json({ error: 'Invalid email' });
}

// Validate phone
const phoneRegex = /^[\d\s\-\+\(\)]+$/;
if (!phoneRegex.test(phone)) {
  return res.status(400).json({ error: 'Invalid phone' });
}
```

## HTTPS & SSL

### Production
- Always use HTTPS
- Obtain SSL certificate (Let's Encrypt free option)
- Redirect HTTP to HTTPS

### Development
- HTTP is acceptable for localhost
- Consider using self-signed certs for testing

## Secure Headers

Add security headers to backend responses:

```javascript
const helmet = require('helmet');
app.use(helmet());

// This sets:
// - X-Content-Type-Options: nosniff
// - X-Frame-Options: DENY
// - X-XSS-Protection: 1; mode=block
// - Strict-Transport-Security
// - Content-Security-Policy
```

## SQL Injection Prevention

If using database, always use parameterized queries:

```javascript
// Bad - vulnerable to SQL injection
db.query(`SELECT * FROM users WHERE email = '${email}'`);

// Good - using parameterized query
db.query('SELECT * FROM users WHERE email = ?', [email]);
```

## Cross-Site Scripting (XSS) Prevention

React automatically escapes content, but be careful with:
```javascript
// Bad - dangerous
dangerouslySetInnerHTML={{ __html: userInput }}

// Good - safe
<div>{userInput}</div>
```

## Cross-Site Request Forgery (CSRF) Prevention

Implement CSRF tokens for state-changing operations:

```javascript
// Add CSRF middleware
const csrf = require('csurf');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(csrf({ cookie: true }));

// Include token in forms
app.get('/form', (req, res) => {
  res.render('send', { csrfToken: req.csrfToken() });
});
```

## Logging & Monitoring

### What to Log
- Authentication attempts
- Authorization failures
- API errors
- Suspicious activity

### What NOT to Log
- Passwords
- API keys
- Credit card information
- Personal identification numbers

### Example Safe Logging
```javascript
console.log('[v0] User login attempt:', { 
  email: user.email, 
  timestamp: new Date(),
  status: 'success'
});

// Don't log passwords or tokens
// console.log('[v0] Token:', passwordOrToken); // Bad!
```

## Security Checklist

- [ ] All secrets in environment variables
- [ ] `.env` files in `.gitignore`
- [ ] HTTPS enabled in production
- [ ] CORS properly configured
- [ ] Input validation on all endpoints
- [ ] Security headers added
- [ ] Rate limiting implemented
- [ ] Logging configured (no secrets logged)
- [ ] Error messages don't expose system details
- [ ] Dependencies regularly updated
- [ ] Security headers (CSP, HSTS, X-Frame-Options)
- [ ] Authentication/Authorization if needed

## Dependency Security

### Regular Updates
```bash
# Check for vulnerabilities
npm audit

# Fix known vulnerabilities
npm audit fix

# Update dependencies
npm update
```

### Lock File
Always commit `package-lock.json` or `yarn.lock` to ensure consistent dependencies.

## Incident Response

If a security issue is discovered:

1. **Assess the Risk**: How severe? Who is affected?
2. **Contain**: Stop the bleeding (revoke keys, patch code)
3. **Notify**: Inform affected parties if needed
4. **Investigate**: Determine root cause
5. **Fix**: Apply permanent solution
6. **Learn**: Update processes to prevent recurrence

## Reporting Security Issues

If you discover a security vulnerability:
1. Do NOT open a public issue
2. Email security details to the maintainers
3. Include: description, reproduction steps, potential impact
4. Allow reasonable time for patching before disclosure
