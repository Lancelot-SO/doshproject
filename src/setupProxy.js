const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    // 1. DOSH Registration API
    app.use(
        '/api/v3',
        createProxyMiddleware({
            target: 'https://dsp.onenet.xyz:50443/api/v3',
            changeOrigin: true,
            secure: false,
            followRedirects: true,
            pathRewrite: {
                '^/api/v3': '',
            },
            // http-proxy-middleware v3: Event handlers must be in the 'on' object
            on: {
                proxyReq: (proxyReq, req, res) => {
                    // Spoof the Origin header to match the production domain
                    proxyReq.setHeader('Origin', 'https://www.0800dosh.me');
                },
                proxyRes: (proxyRes, req, res) => {
                    // Rewrite ACAO to match the local client origin (localhost:3000)
                    // The backend returns 'https://www.0800dosh.me', which the local browser would block.
                    const requestOrigin = req.headers.origin;
                    if (requestOrigin) {
                        proxyRes.headers['access-control-allow-origin'] = requestOrigin;
                    }
                    proxyRes.headers['access-control-allow-credentials'] = 'true';
                },
                error: (err, req, res) => {
                    console.error('[Proxy Error]:', err);
                }
            }
        })
    );

    // 2. DOSH CMS Tracking
    app.use(
        '/api/page-visit',
        createProxyMiddleware({
            target: 'https://doshcms.interactivedigital.com.gh',
            changeOrigin: true,
            xfwd: true,
        })
    );
};
