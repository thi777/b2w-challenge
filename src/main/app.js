const express = require("express");
const cors = require("cors");
const routes = require("./routes");

require("../infra/database/db");

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.disable("x-powered-by");
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
