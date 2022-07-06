import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import {img, container, text, btn, divactivity} from './detail.module.css'


function CountryDetail(){

    const [country, setCountry] = useState(null)
    console.log(country)
    let {id} = useParams()
    
    useEffect(() =>{
       axios.get('http://localhost:3001/api/countries/'+id)
       .then((response)=>{
        setCountry(response.data)
       })
       return()=>{
        setCountry(null)
       }
    },[])

   return (
    <div>
    <div >      
            {
             country ?
             <>
             <div className={container}>
            <img src={country[0].FlagImg} alt = {country[0].Nombre} className={img}></img>
            <h1 className={text}>{country[0].Idc}</h1>                              
            <h1 className={text}>{country[0].Nombre}</h1>
            <h3 className={text}>Capital: {country[0].Capital}</h3>
            <h3 className={text}>Subregion: {country[0].Subregion}</h3>
            <h3 className={text}>Area: {country[0].Area} Km2</h3>
            <h3 className={text}>Poblacion: {country[0].Poblacion}</h3>
            </div>
            <div className={divactivity}>
                {
                    country[0].activities.length > 0 ? 
                    country[0].activities.map(c =>
                        <div>
                            <h1 className={text}>Activity: {c.Nombre}</h1>
                            <h3 className={text}>Duration: {c.Duracion} hours</h3>
                            <h3 className={text}>Difficulty: {c.Dificultad}</h3>
                            <h3  className={text}>Season: {c.Temporada}</h3>
                        </div>):
                        <div>
                            <p className={text}>This country has no activities yet</p>
                            <Link to='/newActivity'>
                                <button className={btn}>Create Activity?</button>
                            </Link>
                        </div> 
                }
            </div>           
             </>:
            <div>loading</div>
            }                
       </div>
    </div>   
   )
}

export default CountryDetail;