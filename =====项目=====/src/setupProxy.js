const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/api", { target: "http://192.168.80.11:8004" }));
  app.use(proxy("/pdb", { target: "http://192.168.80.11:8004" }));
};
