const request = require("supertest");
const PlanetSchema = require("../../src/model/Planets");
const app = require("../../src/main/app");
const conn = require("../../src/infra/database/index");

beforeAll(async () => {
  await conn.connect();
});

afterAll(async () => {
  await conn.close();
});

describe("GET /api/v1/planets/id", () => {
  beforeAll(async () => {
    endpoint = "/planets";
    let planet = new PlanetSchema({
      name: "Bespin",
      climate: "Geladdo",
      terrain: "Nevasca",
    });
    await planet.save();
  });

  it("should return 200 when get one planet", async () => {
    let {
      body: { _id },
      status,
    } = await request(app).post(endpoint).send({
      name: "Bespin",
      climate: "Geladdo",
      terrain: "Nevasca",
    });
    expect(status).toBe(201);

    const results = await request(app).get(`${endpoint}/${_id}`);
    expect(results.status).toBe(200);
    expect(results.body).toMatchObject({
      _id: `${_id}`,
      name: "Bespin",
      climate: "Geladdo",
      terrain: "Nevasca",
    });
  });
});
