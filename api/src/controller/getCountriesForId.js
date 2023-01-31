const { countryInDb } = require('../db')
const { Country, Tactivity } = require('../db')
const { sequelize } = require('sequelize')

const countriesForId = async(req, res) => {
const { id } = req.params

try {
    const country = await Country.findAll({
        where: {id: id.toUpperCase()},
        include: {
            model: Tactivity,
            attributes: ["name", "difficulty", "duration", "season"],
             through: { attributes: [] }
        }
    })
    console.log(country)
  if(country) return res.json(country)
  return res.status(404).json({
    error: {
        message: "Country not found",
        values: { ...req.params}
    }
  })
} catch (error) {
    console.log(error)
    return res.status(500).json({
        error: {
            message: "server error"
        }
    })
}

}

module.exports = {
countriesForId
}