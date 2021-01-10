const PlanetsService = require("../../domain/services/Planets.service");

class PlanetController {
  async store({ body: examples }, res) {
    const results = await PlanetsService.store({ payload: examples });

    if (results.error) {
      return res.status(400).json({
        statusCode: 400,
        message: `missing data: ${results.error}`,
      });
    }

    return res.status(201).json(results);
  }

  async list(req, res) {
    const results = await PlanetsService.list();

    return res.status(200).json(results);
  }

  async getById({ params }, res) {
    const { id } = params;
    const results = await PlanetsService.getById({ payload: id });

    return res.status(200).json(results);
  }

  async getByName({ query }, res) {
    const { name } = query;

    const results = await PlanetsService.getByName({ payload: name });

    return res.status(200).json(results);
  }
}

module.exports = new PlanetController();
