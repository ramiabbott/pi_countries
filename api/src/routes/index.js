const { Router } = require('express');
const { createActivity } = require('../controller/createDbTactivity');
const { getCountries } = require('../controller/getcountries');
const { countriesForId } = require('../controller/getCountriesForId');
const { countryInDb } = require('../utils');
const { countryDb } = require('../utils/index')
const { getActivities } = require('../controller/getTactivity')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// router.get('/countries', (req, res) => {
//     if (req.query.name) {
//         return getCountryByName(req, res)
//     }
//     return getCountries(req, res)
// })

router.get('/countries', getCountries)
router.get('/countries/:id',countriesForId)
router.post('/activities', createActivity)
router.get('/activities', getActivities)








module.exports = router;
