const { Router } = require('express');
const {getCoutryById, getCountries, getAllCountries} = require('../controllers/countryController')
const router = Router();
const {Country , Activity} = require('../db')


router.get('/', async(req,res,next) => { //ruta para buscar los datos en la base de datos y ademas filtrar por nombre
    const name = req.query.name
    let countriesdb = await Country.findAll({
        include:{
            model: Activity,
            attributes:[],
            through: {
                attributes: [],
            }
        }
    })
    
try {
    if(name){
        console.log(name)
        let countryByName  =  countriesdb.filter(c => c.Nombre.toLowerCase().includes(name.toLowerCase())) 
        console.log(countryByName) 
        if(countryByName.length>0){
            return res.send(countryByName)
        }else{
            return res.status(404).send({message: `Country ${name} not found please check the entered values`})
        }
    }else{
        res.send(countriesdb)
    }
} catch (error) {
        next(error)
    }   
})

router.get('/:Id', async (req,res,next) => {//medio funciona ya que la validacion se bloquea pero si se  hace como se pide no  genera error y sale el pais deseaddopor id
    console.log("ruta get id funcionando")
    const {Id} = req.params
    console.log(Id)
    let paises = await Country.findAll(
        {
        include:{
            model: Activity,
            attributes:['Nombre', 'Duracion', 'Dificultad', 'Temporada'],
            through: {
                attributes: [],
            }
        }
    }
    )
    try {
        //res.send(paises[id-1])
        let coutryById = paises.filter(c => parseInt(c.Id) === parseInt(Id))
        if(coutryById.length > 0){
             //return res.send(paises[Id-1])
             res.send(coutryById)
         }else{
            return res.status(404).send({message: `Id not found please check the entered values`})
         }
    } catch (error) {
        next(error)
    }
    
})



router.post('/', (req,res,next) => {
    res.send('post en /countries')
})

router.put('/modify/:id', (req,res,next) => {

})

router.delete('/delete/:id', async (req,res,next) => {

    
})


module.exports = router;