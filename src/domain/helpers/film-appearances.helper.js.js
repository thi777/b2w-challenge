const api = require("../../main/integrations/swapi-api");
const https = require("https");

module.exports = async (name) => {
  const { data } = await api.get(`/planets/?search=${name}`, {
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  });

  if (!data.results.length) return { empty: true };

  const { population, films } = data.results[0];

  return { population, films: films.length };
};
