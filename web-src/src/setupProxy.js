const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "http://jejujobara.com:60000",
            changeOrigin: true,
        })
    );
};
