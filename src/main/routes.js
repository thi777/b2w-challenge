const { Router } = require("express");
const PlanetsController = require("../presentation/controller/Planets.controller");

const routes = new Router();

routes
  .post("/planets", PlanetsController.store)
  .get("/planets", PlanetsController.list)
  .get("/planets/:id", PlanetsController.getById);

module.exports = routes;
