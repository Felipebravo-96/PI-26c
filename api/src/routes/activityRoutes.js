const { Router } = require('express');
const {getCoutryById, getAllCountriesDB} = require('../controllers/countryController')
const router = Router();
const {Activity, Country} = require('../db')

router.get('/', async (req,res,next) => {
    try {
        const activitiesDb = await Activity.findAll({
            include: {
                model: Country,
                atributes: ["Nombre", "Capital", "Continente", "Subregion", "Id"],
                through:{
                    atributes:[]
                }
            }
        })
        if(activitiesDb.length>0){
            res.send(activitiesDb)
        }else{
            res.send([])
        }
    } catch (error) {
        next(error)
    }
    
})

router.post('/', async (req,res,next) => {
    try {
        const {Nombre, Dificultad, Duracion, Temporada, countries} = req.body;

        const  newActivity = await  Activity.create({
            Nombre,
            Dificultad,
            Duracion,
            Temporada
        })
        const activityCountry = await Country.findAll({
            where:{
                Nombre: countries,
            }
        })
        await newActivity.addCountry(activityCountry);
        res.send(newActivity)
    } catch (error) {
        next(error)
    }


})


router.put('/modify/:id', (req,res,next) => {
    const { Nombre, Dificultad, Duracion, Temporada } = req.body;
    const {id} = req.params
    
    let modyfy = Activity.findOne({
            where:{
                id: id
            }
        })
    modyfy.Nombre = Nombre
    modyfy.Nombre = Dificultad
    modyfy.Nombre = Duracion
    modyfy.Nombre = Temporada
    
    .then(res.send('actualizado'))
    .catch((e)=>next(e))

})



module.exports = router;