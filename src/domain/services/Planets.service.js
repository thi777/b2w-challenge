const PlanetsRepository = require("../../infra/repository/Planets.repository");
const { isValidFields } = require("../validator/validField");

class PlanetService {
  async store({ payload }) {
    const validField = await isValidFields(payload, [
      "name",
      "climate",
      "terrain",
    ]);

    if (validField.error) return validField;

    return await PlanetsRepository.store({ payload });
  }

  async list() {
    return await PlanetsRepository.list();
  }

  async getById({ payload }) {
    return await PlanetsRepository.getById({ payload });
  }

  async getByName({ payload }) {
    return await PlanetsRepository.getByName({ payload });
  }

  async delete({ payload }) {
    const results = await PlanetsRepository.delete({ payload });
    
    if (!results.deletedCount) return { error: true };

    return results;
  }
}

module.exports = new PlanetService();
