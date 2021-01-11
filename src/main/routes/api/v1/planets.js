const { Router } = require("express");
const InvalidController = require("../../../../presentation/controller/Invalid.controller");
const PlanetsController = require("../../../../presentation/controller/Planets.controller");

const routes = new Router();

routes
  .post("/planets", PlanetsController.store)
  .get("/planets", PlanetsController.list)
  .get("/planets/:id", PlanetsController.getById)
  .get("/planetsByName", PlanetsController.getByName)
  .delete("/planets/:id", PlanetsController.delete);

const methods = ["post", "get", "put", "delete"];

for (const method of methods) {
  routes[method]("*", InvalidController.handle);
}

module.exports = routes;
