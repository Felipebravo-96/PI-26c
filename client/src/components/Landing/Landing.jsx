import { Link } from "react-router-dom"
import {fondo, PrincipalContainer, texto, btn, divbtn} from  './Landing.module.css'

function Landing(){
    return<div className={fondo}>
                        <Link to={'/countries'} >
                            <button className={btn}>START</button>
                        </Link>
                    <h1 className={texto}>YOUR JOURNEY <br/> BEGGINS</h1>
                </div>
           
}

export default Landing