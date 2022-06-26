const { Router } = require('express');
const {getCoutryById, getCountries, getAllCountries} = require('../controllers/countryController')
const router = Router();
const {Country} = require('../db')


router.get('/', async(req,res,next) => { //ruta para buscar los datos en la base de datos y ademas filtrar por nombre
    const name = req.query.name
    let countriesdb = await Country.findAll() 
try {
    if(name){
        console.log(name)
        let countryByName  =  countriesdb.filter(c => c.Nombre.toLowerCase() === name.toLowerCase())
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

router.get('/:id', async (req,res,next) => {//medio funciona ya que la validacion se bloquea pero si se  hace como se pide no  genera error y sale el pais deseaddopor id
    console.log("ruta get id funcionando")
    const {id} = req.params
    console.log(id)
    let paises = await Country.findAll()
    try {
        //res.send(paises[id-1])
        let coutryById = paises.filter(c => parseInt(c.Id) === parseInt(id))
        if(coutryById.length > 0){
             return res.send(paises[id-1])
         }else{
            return res.status(404).send({message: `Id not found please check the entered values`})
         }
    } catch (error) {
        next(error)
    }
    
})


// router.get('/:id', async (req,res,next) => {
//     console.log("ruta get id funcionando")
//     try {
//         const {id} = req.params
//         console.log(id)
//         let paises = await Country.findAll()
//         res.send(paises[id-1])
//         // let coutryById = paises.filter(c => c.id === id );
//         // if(paises.includes(id) === true){
//         //     res.send(paises[id-1])
//         // }
//     } catch (error) {
//         next(error)
//     }
    
// })

router.post('/', (req,res,next) => {
    res.send('post en /countries')
})

router.put('/', (req,res,next) => {
    res.send('put en /countries')
})

router.delete('/', (req,res,next) => {
    res.send('delete en /countries')
})



//const {Country} = require("../db")

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


//router.use(Router.json())

// router.use("/", getAllCountriesDB)
// router.use("/:id", getCoutryById)
// router.use("/{name}", getCoutryByName)

// router.get('/:id', async (req, res, next) => {
//     const id = req.params.id
//     //req.body.id = parseInt(id);
//     try {
//         res.send(await getCoutryById(id))
//     } catch (error) {
//         next(error) //podria ponerse esto aca????
//         //res.status(404).json({ error: 'Pais no encontrado' });
//     }
// })//estas funciones osn basicamente como la de arriba y lasllamo en routes simplemente y ya se ejecutaran



module.exports = router;