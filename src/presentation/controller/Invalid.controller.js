class InvalidController {
  async handle({ method, url }, res) {
    try {
      return res.status(404).json({
        statusCode: 404,
        message: `Cannot ${method} ${url}`,
        error: "Not Found",
      });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ statusCode: 500, message: "Sorry, something broke" });
    }
  }
}

module.exports = new InvalidController();
