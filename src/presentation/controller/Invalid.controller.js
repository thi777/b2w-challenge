class InvalidController {
  async handle({ method, url }, res) {
    return res.status(404).json({
      statusCode: 404,
      message: `Cannot ${method} ${url}`,
      error: "Not Found",
    });
  }
}

module.exports = new InvalidController();
