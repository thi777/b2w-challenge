const request = require("supertest");
const app = require("../../src/main/app");
const PlanetSchema = require("../../src/model/Planets");
const conn = require("../../src/infra/database/db");

beforeAll(async () => {
  await conn.connect();
});

afterAll(async () => {
  await conn.close();
});

describe("DELETE /api/v1/planets", () => {
  beforeAll(async () => {
    endpoint = "/planets";
    let planet = new PlanetSchema({
      name: "Bespin",
      climate: "Gelado",
      terrain: "Nevasca",
    });
    await planet.save();
  });

  it("should return 201 when planet is successfully created", async () => {
    let {
      body: { _id },
      status,
    } = await request(app).post(endpoint).send({
      name: "Bespin",
      climate: "Gelado",
      terrain: "Nevasca",
    });
    expect(status).toBe(201);

    const response = await request(app).delete(`${endpoint}/${_id}`);
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      statusCode: 200,
      message: "Deleted sucessfully",
    });
  });

  it("should return 400 when planet does not exist", async () => {
    const response = await request(app).delete(
      `${endpoint}/fffb997e4f83fbf45565fa09`
    );
    expect(response.status).toBe(400);
    expect(response.body).toMatchObject({
      statusCode: 400,
      message: "planet does not exist",
    });
  });
});
