# API Documentation

## Backend Endpoints

### Base URL
- Development: `http://localhost:5000`
- Production: `https://final-tours.onrender.com`

## Endpoints

### Places API

#### GET /api/places
Fetch all available places or search for specific places.

**Query Parameters:**
- `search` (optional): Search term for places

**Response:**
```json
[
  {
    "id": "masai-mara",
    "name": "Masai Mara National Reserve",
    "type": "National Park",
    "location": {
      "latitude": -1.5,
      "longitude": 35.0
    },
    "description": "..."
  }
]
```

**Example:**
```bash
GET /api/places
GET /api/places?search=Masai
```

### Translation API

#### POST /translate
Translate text to a target language using MyMemory API.

**Request Body:**
```json
{
  "text": "Hello world",
  "targetLanguage": "es",
  "sourceLanguage": "en"
}
```

**Response:**
```json
{
  "translatedText": "Hola mundo",
  "match": 1
}
```

**Example:**
```bash
curl -X POST http://localhost:5000/translate \
  -H "Content-Type: application/json" \
  -d '{
    "text": "Hello world",
    "targetLanguage": "es"
  }'
```

## Error Handling

### Common Error Responses

#### 400 Bad Request
```json
{
  "error": "Missing required parameters",
  "details": "..."
}
```

#### 500 Internal Server Error
```json
{
  "error": "Server error",
  "details": "..."
}
```

## CORS Configuration

The backend implements CORS to control which origins can access the API.

**Allowed Origins:**
- Configured via `ALLOWED_ORIGINS` environment variable
- Defaults to: `http://localhost:3000`, `http://localhost:3001`
- Production should specify actual domain(s)

Example production configuration:
```env
ALLOWED_ORIGINS=https://finaltours.com,https://www.finaltours.com
```

## Rate Limiting

Current implementation uses:
- **Cache TTL**: 3600 seconds (1 hour)
- **RapidAPI**: Subject to RapidAPI plan limits

For production, consider:
- Implementing express-rate-limit middleware
- Setting stricter cache policies
- Adding authentication for sensitive endpoints

## Authentication

Currently endpoints are publicly accessible. For production, consider adding:
- API key authentication
- JWT tokens
- OAuth2 integration

## Caching

The backend implements caching for API responses with a 1-hour TTL to reduce external API calls.

**Cache Keys:**
- Generated based on endpoint and parameters
- Automatically managed by NodeCache

## External API Dependencies

The backend relies on these external APIs:
- **RapidAPI**: Places, maps, and search functionality
- **Google Maps API**: Location and search data
- **MyMemory**: Translation services
- **Africa API**: Country/continent data

Ensure all API keys are valid and have sufficient quota.

## Security Notes

- All sensitive keys should be in environment variables
- Never commit `.env` files
- Use HTTPS in production
- Implement rate limiting
- Validate and sanitize all inputs
- Consider implementing API authentication
