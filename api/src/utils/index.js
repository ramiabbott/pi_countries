const axios = require("axios");
const { Country, Tactivity } = require("../db");

const countryInDb = async () => {

  try {
    const saveDb = await Country.findAll({
      include: [
        { model: Tactivity, attributes: ["name", "difficulty", "duration", "season"], through: { attributes: [] } },
      ],
    });
    if (!saveDb.length) {
      const infoApi = await axios.get("https://restcountries.com/v3/all");
      const apiCountries = await infoApi.data.map((el) => {
        return {
          id: el.cca3,  
          name: el.name.common,
          flags: el.flags[1],
          continents: el.continents[0],
          capital: el.capital ? el.capital : "Capital not found",
          subregion: el.subregion,
          area: el.area,
          population: el.population
        };
      });

      const countriesCreate = await Country.bulkCreate(apiCountries); // para pasar los personajes a la base de datos?
  
      return countriesCreate;
    }
    if (saveDb.length) {
      return saveDb;
    }
  } catch (error) {
    console.log(`error: ${error}`);
  }
};

const activityDB = async () => {
	const act = await Tactivity.findAll();
	return act;
};



// const countDB = async () => {
// 	try {
// 		let info = await getAPICountries();
// 		info.forEach(e => {
// 			Country.findOrCreate({
// 				where: {
// 					id: e.id,
// 					name: e.name,
// 					flag: e.img,
// 					continent: e.continent,
// 					capital: e.capital,
// 					subregion: e.subregion,
// 					area: e.area,
// 					population: e.population,
// 				},
// 			});
// 		});
// 		const country = await Country.findAll({
// 			include: [Tactivity],
// 		});
// 		return country;
// 	} catch (error) {
// 		res.status(404).send(error);
// 	}
// };



module.exports = {
  countryInDb,
};
