const { Router } = require("express");
const PlanetsController = require("../presentation/controller/Planets.controller");

const routes = new Router();

routes.post("/planets", PlanetsController.store);

module.exports = routes;
