const PlanetsService = require("../../domain/services/Planets.service");

class PlanetController {
  async store({ body: examples }, res) {
    try {
      const results = await PlanetsService.store({ payload: examples });

      if (results.error) {
        return res.status(400).json({
          statusCode: 400,
          message: `missing data: ${results.error}`,
        });
      }

      return res.status(201).json(results);
    } catch (error) {
      return res
        .status(500)
        .json({ statusCode: 500, message: "Sorry, something broke" });
    }
  }

  async list(req, res) {
    try {
      const results = await PlanetsService.list();

      return res.status(200).json(results);
    } catch (error) {
      return res
        .status(500)
        .json({ statusCode: 500, message: "Sorry, something broke" });
    }
  }

  async getById({ params }, res) {
    try {
      const { id } = params;
      const results = await PlanetsService.getById({ payload: id });

      return res.status(200).json(results);
    } catch (error) {
      return res
        .status(500)
        .json({ statusCode: 500, message: "Sorry, something broke" });
    }
  }

  async getByName({ query }, res) {
    try {
      const { name } = query;

      const results = await PlanetsService.getByName({ payload: name });

      return res.status(200).json(results);
    } catch (error) {
      return res
        .status(500)
        .json({ statusCode: 500, message: "Sorry, something broke" });
    }
  }

  async delete({ params }, res) {
    const { id } = params;

    try {
      const results = await PlanetsService.delete({ payload: id });

      if (results.error) {
        return res
          .status(400)
          .json({ statusCode: 400, message: "planet does not exist" });
      }

      return res
        .status(200)
        .json({ statusCode: 200, message: "Deleted sucessfully" });
    } catch (error) {
      return res
        .status(500)
        .json({ statusCode: 500, message: "Sorry, something broke" });
    }
  }
}

module.exports = new PlanetController();
