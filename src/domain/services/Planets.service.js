const PlanetsRepository = require("../../infra/repository/Planets.repository");
const { isValidFields } = require("../validator/validField");
const appearances = require("../helpers/film-appearances.helper.js");

class PlanetService {
  async store({ payload }) {
    const validField = await isValidFields(payload, [
      "name",
      "climate",
      "terrain",
    ]);

    if (validField.error) return validField;

    const { population, films } = await appearances(payload.name);
    payload.population = population;
    payload.films = films;

    return await PlanetsRepository.store({ payload });
  }

  async list() {
    const results = await PlanetsRepository.list();

    if (!results.length) return { empty: true };

    return results;
  }

  async getById({ payload }) {
    const results = await PlanetsRepository.getById({ payload });

    if (!results) return { error: true };

    return results;
  }

  async getByName({ payload }) {
    const results = await PlanetsRepository.getByName({ payload });

    if (!results.length) return { error: true };

    return results;
  }

  async delete({ payload }) {
    const results = await PlanetsRepository.delete({ payload });

    if (!results.deletedCount) return { error: true };

    return results;
  }
}

module.exports = new PlanetService();
