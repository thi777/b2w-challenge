const mongoose = require("mongoose");
const Planet = require("../../model/Planets");

class PlanetService {
  async store({ payload }) {
    return await Planet.create(payload);
  }

  async list() {
    return await Planet.find();
  }

  async getById({ payload: id }) {
    return await Planet.findById({ _id: mongoose.Types.ObjectId(id) });
  }
}

module.exports = new PlanetService();
