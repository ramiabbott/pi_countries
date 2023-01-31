const { Tactivity, Country } = require('../db')

const createActivity = async(req, res) => {
    const { name,  difficulty, duration, season, pais } = req.body
    try {
        const tact = await Tactivity.create({
            name,
            difficulty,
            duration,
            season 
        })

        const countr = await Country.findAll({
            where: {
                name: pais
            }
        })    
       tact.addCountry(countr)
        return res.send("se ha creado la Actividad turistica")
    } catch (error) {
        console.log(error)
    } 
}

module.exports = {
createActivity
}