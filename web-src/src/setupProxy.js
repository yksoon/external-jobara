const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/v1",
        createProxyMiddleware({
            target: "http://jejujobara.com:60000",
            pathRewrite: {
                "^/v1": "",
            },
            changeOrigin: true,
        })
    );
};
