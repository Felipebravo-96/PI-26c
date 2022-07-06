const axios = require("axios")
const {Country, Activity} = require("../db")

// async function getAllActivities(req, res, next){
//     try {
//         let countries = (await axios('https://restcountries.com/v3/all')).data
//         res.send(countries)
//     } catch (error) {
//         next(error)
//     }
// }


// function createActivity(Nombre, Dificultad, Duracion, Temporada){
//     let newActivity ={
//         Nombre: Nombre,
//         Dificultad: Dificultad,
//         Duracion:Duracion,
//         Temporada: Temporada,
//     }

//     let activitySearch = Activity.find(a => a.Nombre === Nombre)
//     if(!activitySearch){
//         Activity.push(newActivity)
//     }
//}//hasta aca va el real



// addAccessory: function ({ id, color, type, description }) {
//     // Agrega un nuevo accesorio.
//     // Si el accesorio ya existe, no es agregado y arroja un Error ('El accesorio con el id <id> ya existe')
//     // Debe devolver el mensaje 'El accesorio <type> fue agregado correctamente'
//     // Inicialmente debe guardar la propiedad <popularity> del accesorio como 'low' por defecto
//     // Si la descripción supera los 140 caracteres, debe arrojar un error
//     let newAcces ={
//       id: id,
//       type: type,
//       color:color,
//       description: description,
//       popularity: 'low'
//     }
//     let idBuscado  = accessories.find(e => e.id=== id)
//     if (!idBuscado){
//       if(description.length > 140){
//         throw('La descripción supera los 140 caracteres')
//       }else accessories.push(newAcces)
//     }else{
//       throw('El accesorio con el id '+id+ ' ya existe')
//       }
//   },

module.exports={
    getAllActivities,
    createActivity
}
