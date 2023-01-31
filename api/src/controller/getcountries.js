const { Country, Tactivity } = require("../db");
const { countryInDb } = require("../utils");

const getCountries = async (req, res) => {
  try {
    const { name } = req.query;
    const total = await countryInDb();
    if (name) {
      const nombre = total.filter((el) =>
        el.name.toLowerCase().includes(name.toLowerCase())
      );
      if (nombre.length) {
        return res.json(nombre);
      } else {
        return res.json({ error: `El País (${name}) no existe!⚠` });
      }
    } else {
      return res.json(total);
    }
  } catch (error) {
    console.log(`error: ${error}`);
  }
};

module.exports = {
  getCountries,
};
