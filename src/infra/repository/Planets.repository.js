const Planet = require("../../model/Planets");

class PlanetService {
  async store({ payload }) {
    return await Planet.create(payload);
  }
}

module.exports = new PlanetService();
