const { Country, Tactivity } = require('../db')
const { Op } = require('sequelize')

const getCountryByName = async (req, res) => {
    let { name } = req.query
    name = name.trim()
    try {
        const country = await Country.findAll({
            where: {
                name: {
                    [ Op.iLike ]: `${name}%`
                }
            },
            include: {
                model: Tactivity, through: { attributes: [] },
            },
        })
        console.log(country)
        if (name) {  
            return res.json(country)
        }
        
        return res.status(404).json({
            error: {
                message: "Country doesn't exist",
                values: { ...req.query }
            }
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: {
                message: "Server error"
            }
        })
    }
}

module.exports = {
    getCountryByName
}