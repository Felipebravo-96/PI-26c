const { Router } = require('express');
const {getCoutryById, getAllCountriesDB} = require('../controllers/countryController')
const router = Router();
const {Activity} = require('../db')

router.get('/', (req,res,next) => {
    res.send('get en /activities')
})

router.post('/', async (req,res,next) => {
    try {
        const {Nombre, Dificultad, Duracion, Temporada} = req.body;
        const  newActivity = await  Activity.create({
            Nombre,
            Dificultad,
            Duracion,
            Temporada
        })
        res.send(newActivity)
    } catch (error) {
        next(error)
    }


})

router.put('/', (req,res,next) => {
    res.send('put en /activities')
})

router.delete('/', (req,res,next) => {
    res.send('delete en /activities')
})

module.exports = router;