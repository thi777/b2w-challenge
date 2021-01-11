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
      name: "Dagobah",
      climate: "Gelado",
      terrain: "Nevasca",
    });
    await planet.save();
  });

  it("should return 200 when search the planet by name", async () => {
    let {
      body: { name, _id },
      status,
    } = await request(app).post(endpoint).send({
      name: "Dagobah",
      climate: "Gelado",
      terrain: "Nevasca",
    });
    expect(status).toBe(201);

    const results = await request(app).get(`${endpoint}?name=${name}`);
    // console.log(results.body[results.body.length - 1]);
    expect(results.status).toBe(200);

    setTimeout(async () => {
      expect(await results.body[results.body.length - 1]).toMatchObject({
        _id: `${_id}`,
        name: "Dagobah",
        climate: "Gelado",
        terrain: "Nevasca",
      });
    }, 3000);
  });
});
