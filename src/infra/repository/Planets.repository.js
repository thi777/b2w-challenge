const Planet = require("../../model/Planets");

class PlanetService {
  async store({ payload }) {
    return await Planet.create(payload);
  }

  async list() {
    return await Planet.find();
  }
}

module.exports = new PlanetService();
