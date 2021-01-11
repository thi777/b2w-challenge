const request = require("supertest");
const app = require("../../src/main/app");
const conn = require("../../src/infra/database/index");

beforeAll(async () => {
  await conn.connect();
});

afterAll(async () => {
  await conn.close();
});

describe("GET /api/v1/planets", () => {
  beforeAll(async () => {
    endpoint = "/abacaxi";
  });

  it("should return 404 when listing all planets", async () => {
    const response = await request(app).get(endpoint);
    expect(response.status).toBe(404);
    expect(response.body).toMatchObject({
      statusCode: 404,
      message: "Cannot GET /abacaxi",
      error: "Not Found",
    });
  });
});
