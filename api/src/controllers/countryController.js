const axios = require("axios")
const {Country} = require("../db")



async function getAllCountries(){//coge los  datos de la api y los  pushea dentro de la base de datos prueba
    try {
        let countries = (await axios('http://restcountries.com/v3/all')).data.
        map(c =>({Idc: c.cca3,
                  Nombre: c.name.common,
                  Flag: c.flag,
                  Continente: c.continents?.toString(),
                  Capital: c.capital?.toString(),
                  Subregion: c.subregion,
                  Area: c.area,
                  Poblacion: c.population, 
                  FlagImg: c.flags[0]}))   
        //Promise.all(countries)    
        await Country.bulkCreate(countries)

        console.log("datos subidos correctamente")    
    } catch (error) {
        console.log(error)
    }
}

module.exports={
    getAllCountries,
}


