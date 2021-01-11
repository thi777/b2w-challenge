const appearances = require("../../src/domain/helpers/film-appearances.helper.js");

describe("validate field", () => {
  it("should return the missing fields", async () => {
    const exampleMock = {
      name: "Dagobah",
      climate: "Geladdo",
      terrain: "Nevasca",
    };

    const { population, films } = await appearances(exampleMock.name);
    exampleMock.population = population;
    exampleMock.films = films;

    expect(exampleMock).toMatchObject({
      name: "Dagobah",
      climate: "Geladdo",
      terrain: "Nevasca",
      population: "unknown",
      films: 3,
    });
  });
});
