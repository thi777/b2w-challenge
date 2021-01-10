const request = require("supertest");
const app = require("../../src/main/app");
const PlanetSchema = require("../../src/model/Planets");
const conn = require("../../src/infra/database/index");

beforeAll(async () => {
  await conn.connect();
});

afterAll(async () => {
  await conn.close();
});

describe("POST /api/v1/example", () => {
  beforeAll(async () => {
    endpoint = "/planets";
    let planet = new PlanetSchema({
      name: "Bespin",
      climate: "Geladdo",
      terrain: "Nevasca",
    });
    await planet.save();
  });

  it("should return 201 when planet is successfully created", async () => {
    const response = await request(app).post(endpoint).send({
      name: "Bespin",
      climate: "Geladdo",
      terrain: "Nevasca",
    });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("_id");
    expect(response.body.name).toBeTruthy();
    expect(response.body.climate).toBeTruthy();
    expect(response.body.terrain).toBeTruthy();
  });

  it("should return 400 if missing some field", async () => {
    const response = await request(app).post(endpoint).send({
      name: "name",
      climate: "",
      terrain: "",
    });
    expect(response.status).toBe(400);
    expect(response.body).toMatchObject({
      statusCode: 400,
      message: "missing data: climate,terrain",
    });
  });
});
