const { Tactivity, Country } = require('../db')

const getActivities = async (req, res) => {
    try {
        const activities = await Tactivity.findAll(
            {
                include: [
                    { model: Country, through: { attributes: [] } },
                ],
                
            })
        return res.json(activities)
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
getActivities
}