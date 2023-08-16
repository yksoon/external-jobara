const { createProxyMiddleware } = require("http-proxy-middleware");

const apiProxyConfig = {
    API: {
        target:
            process.env.REACT_APP_API_DOMAIN || "http://jejujobara.com:60000",
        changeOrigin: true,
    },
    DOMAIN: {
        target: process.env.REACT_APP_DOMAIN || "http://jejujobara.com",
        changeOrigin: true,
    },
};

module.exports = function (app) {
    app.use("/api", createProxyMiddleware(apiProxyConfig.API));
    app.use("/domain", createProxyMiddleware(apiProxyConfig.DOMAIN));
};
