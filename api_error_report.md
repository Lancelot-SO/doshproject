# Final Step: Backend CORS Configuration

The administrator has chosen **Option A**: Configuring the Backend to send the correct headers and letting Nginx "pass" them through.

## 1. Mandatory Backend Headers
The **Backend Code** (e.g., PHP, Laraval, Node, etc.) must be updated to send these specific headers. It **cannot** use a wildcard `*`.

```php
// Example for PHP
header("Access-Control-Allow-Origin: https://0800dosh.me");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept, x-csrf-token");
```

## 2. Mandatory Nginx Configuration
In the Nginx configuration, the admin needs to ensure these headers are allowed to pass through from the backend to the browser:

```nginx
location /api/v3 {
    proxy_pass http://your_backend_ip;werrtytweeer
    
    # Ensure these headers from the backend reach the browser
    proxy_pass_header Access-Control-Allow-Origin;
    proxy_pass_header Access-Control-Allow-Credentials;
    
    # Handle the browser's "OPTIONS" preflight request
    if ($request_method = 'OPTIONS') {
        add_header 'Access-Control-Allow-Origin' 'https://0800dosh.me' always;
        add_header 'Access-Control-Allow-Credentials' 'true' always;
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS' always;
        add_header 'Access-Control-Allow-Headers' 'Content-Type, Accept, x-csrf-token' always;
        return 204;
    }
}
```

## 3. Why this is required
Because the app sends **Credentials** (withCredentials: true), the browser enforces a security rule:
- **Origin must be explicit**: `https://0800dosh.me` (NOT `*`)
- **Credentials must be true**: `Access-Control-Allow-Credentials: true`

If the backend sends `*`, the browser will block the response even if the data is correct.
