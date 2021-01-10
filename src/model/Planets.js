const { Schema, model } = require("mongoose");

const PlanetSchema = new Schema(
  {
    name: String,
    climate: String,
    terrain: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Planets", PlanetSchema);
