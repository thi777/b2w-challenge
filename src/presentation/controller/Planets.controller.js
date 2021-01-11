const PlanetsService = require("../../domain/services/Planets.service");

class PlanetController {
  async store({ body: examples }, res) {
    try {
      const results = await PlanetsService.store({ payload: examples });

      if (results.error) {
        return res.status(400).send({
          statusCode: 400,
          message: `missing data: ${results.error}`,
        });
      }

      return res.status(201).send(results);
    } catch (error) {
      return res
        .status(500)
        .send({ statusCode: 500, message: "Sorry, something broke" });
    }
  }

  async list({ query }, res) {
    const { page = 1 } = query;
    try {
      const results = await PlanetsService.list({ page });

      if (results.empty) {
        return res.status(200).send({
          statusCode: 200,
          message: `List empty`,
        });
      }

      return res.status(200).send(results);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .send({ statusCode: 500, message: "Sorry, something broke" });
    }
  }

  async getById({ params }, res) {
    try {
      const { id } = params;
      const results = await PlanetsService.getById({ payload: id });

      if (results.error) {
        return res.status(400).send({
          statusCode: 400,
          message: `Planet does not exist`,
        });
      }

      return res.status(200).send(results);
    } catch (error) {
      return res
        .status(500)
        .send({ statusCode: 500, message: "Sorry, something broke" });
    }
  }

  async getByName({ query }, res) {
    try {
      const { name } = query;

      const results = await PlanetsService.getByName({ payload: name });

      if (results.error) {
        return res.status(400).send({
          statusCode: 400,
          message: `Planet does not exist`,
        });
      }

      return res.status(200).send(results);
    } catch (error) {
      return res
        .status(500)
        .send({ statusCode: 500, message: "Sorry, something broke" });
    }
  }

  async delete({ params }, res) {
    const { id } = params;

    try {
      const results = await PlanetsService.delete({ payload: id });

      if (results.error) {
        return res
          .status(400)
          .send({ statusCode: 400, message: "planet does not exist" });
      }

      return res
        .status(200)
        .send({ statusCode: 200, message: "Deleted sucessfully" });
    } catch (error) {
      return res
        .status(500)
        .send({ statusCode: 500, message: "Sorry, something broke" });
    }
  }
}

module.exports = new PlanetController();
