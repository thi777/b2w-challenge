const mongoose = require("mongoose");
const Planet = require("../../model/Planets");

class PlanetRepository {
  async store({ payload }) {
    return await Planet.create(payload);
  }

  async list({ page }) {
    return await Planet.find({})
      .skip((parseInt(page) - 1) * 20)
      .limit(20);
  }

  async getById({ payload: id }) {
    return await Planet.findById({ _id: mongoose.Types.ObjectId(id) });
  }

  async getByName({ payload: name }) {
    return await Planet.find({ name: name });
  }

  async delete({ payload: id }) {
    return await Planet.deleteOne({ _id: mongoose.Types.ObjectId(id) });
  }
}

module.exports = new PlanetRepository();
