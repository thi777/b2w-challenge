const { Schema, model } = require("mongoose");

const PlanetSchema = new Schema(
  {
    // id: Number,
    name: String,
    climate: String,
    terrain: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Planets", PlanetSchema);
