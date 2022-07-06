import { Link } from "react-router-dom"
import {card, container, text, btn} from './countryCard.module.css'

function CountryCard({FlagImg, Nombre, Continente, Poblacion, Id}){
    return(
        <div className={card}>
            <div className={container}>
                <img src={FlagImg} alt={Nombre}/>
                <h1 className={text}>{Nombre}</h1>
                <h1 className={text}>{Continente}</h1>
                <h3 className={text}>Pupulation: {Poblacion}</h3>
                <Link to={`/countries/${Id}`} >
                    <button className={btn}>Details</button>
                </Link>
            </div>
        </div>
    )
}

export default CountryCard