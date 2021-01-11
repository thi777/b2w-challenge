const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlanetSchema = Schema(
  {
    name: String,
    climate: String,
    terrain: String,
    population: String,
    films: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Planets", PlanetSchema);
