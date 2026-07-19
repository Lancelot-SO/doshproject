import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios';

// Development-only interceptors to handle hardcoded absolute URLs without CORS
if (process.env.NODE_ENV === 'development') {
  const originalFetch = window.fetch;
  window.fetch = async (...args) => {
    let [resource, config] = args;
    if (typeof resource === 'string') {
      if (resource.startsWith('https://doshcms.interactivedigital.com.gh')) {
        resource = resource.replace('https://doshcms.interactivedigital.com.gh', '/doshcms-proxy');
      } else if (resource.startsWith('https://dsp.onenet.xyz:50443')) {
        resource = resource.replace('https://dsp.onenet.xyz:50443', '/dsp-proxy');
      } else if (resource.startsWith('https://ipapi.co')) {
        resource = resource.replace('https://ipapi.co', '/ipapi-proxy');
      } else if (resource.startsWith('https://ipwho.is')) {
        resource = resource.replace('https://ipwho.is', '/ipwho-proxy');
      } else if (resource.startsWith('https://api.country.is')) {
        resource = resource.replace('https://api.country.is', '/countryis-proxy');
      }
    }
    return originalFetch(resource, config);
  };

  axios.interceptors.request.use((config) => {
    if (config.url) {
      if (config.url.startsWith('https://doshcms.interactivedigital.com.gh')) {
        config.url = config.url.replace('https://doshcms.interactivedigital.com.gh', '/doshcms-proxy');
      } else if (config.url.startsWith('https://dsp.onenet.xyz:50443')) {
        config.url = config.url.replace('https://dsp.onenet.xyz:50443', '/dsp-proxy');
      } else if (config.url.startsWith('https://ipapi.co')) {
        config.url = config.url.replace('https://ipapi.co', '/ipapi-proxy');
      } else if (config.url.startsWith('https://ipwho.is')) {
        config.url = config.url.replace('https://ipwho.is', '/ipwho-proxy');
      } else if (config.url.startsWith('https://api.country.is')) {
        config.url = config.url.replace('https://api.country.is', '/countryis-proxy');
      }
    }
    return config;
  });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

