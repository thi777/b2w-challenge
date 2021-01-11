const { Router } = require("express");
const PlanetsController = require("../presentation/controller/Planets.controller");
const InvalidController = require("../presentation/controller/Invalid.controller");

const routes = new Router();

routes
  .post("/planets", PlanetsController.store)
  .get("/planets", PlanetsController.list)
  .get("/planets/:id", PlanetsController.getById)
  .get("/planetsByName", PlanetsController.getByName);

const methods = ["post", "get", "put", "delete"];

for (const method of methods) {
  routes[method]("*", InvalidController.handle);
}

module.exports = routes;
