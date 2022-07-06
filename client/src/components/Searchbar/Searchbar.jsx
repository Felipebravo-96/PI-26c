import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {searchCountry} from '../../redux/actions'
import image from '../../imagenes/lupa.png'
import {container, containerinput, boton} from './searchbar.module.css'


function Searchbar(){
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    let imagen = image

    function onSubmit(e){
        e.preventDefault()
        dispatch(searchCountry(search))
    }
    function onInputChange(e){
        e.preventDefault()
        setSearch(e.target.value)   
    }

    return <div>
        <form onSubmit={onSubmit} className={container}>
            <input type={'text'} onChange={onInputChange} value = {search} className={containerinput}></input>
            <button type={'submit'} className= {boton}>Search</button>
        </form>

    </div>
}

export default Searchbar;