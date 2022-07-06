import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import swal from 'sweetalert'
import {container, titulo, inputs, texts, btn, textscountries} from './addActivity.module.css'


function AddActivity(){
    const dispatch = useDispatch()
    const countries =useSelector(state => state.filtCountry)
    const activitiesDb =useSelector(state => state.activities)

    const [activity, setActivity] = useState({Nombre:"", Dificultad:"",Duracion:"",Temporada:"", countries: []})
    let history  = useHistory()
    function onInputChange(e){
        e.preventDefault()
        setActivity({
            ...activity,
            [e.target.name]:  e.target.value
        })
    }



    function onSubmit(e){
        e.preventDefault()
        let activityNames = activitiesDb.filter(a => a.Nombre === activity.Nombre)
        
        if(activity.Nombre.length ===  0){
            swal({
                title:'Ups!',
                text:'Activity name requiered',
                icon:'error',
                button:'Aceptar'
            })   
        }else if(activity.Duracion.length ===  0 || activity.Duracion > 6){
            swal({
                title:'Ups!',
                text:'Activity duration(1 hour min/ 6  hours max)',
                icon:'error',
                button:'Aceptar'
            })   
        }else if(activityNames.length > 0){
            
            swal({
                title:'Ups!',
                text:'Activity already exists',
                icon:'error',
                button:'Aceptar'
            })   
        }else{
            axios.post('http://localhost:3001/api/activities/', activity)
            .then(()=>{
                history.push('/countries')
            })
        }
        ///dispatch(newActivity(e))
    }
    function saveCountry(e){
        e.preventDefault()
        if(Object.values(activity.countries).includes(e.target.value)){
            swal({
                title:'Ups!',
                text:'Country already added',
                icon:'error',
                button:'Aceptar'
            })
        }else{
            setActivity({ 
                ...activity,
                countries: [...activity.countries, e.target.value]
            })
        }

    }
    return <form onSubmit={onSubmit} className= {container}>
                <h1 className={titulo}>Create new activity</h1>
                <label htmlFor=""className={texts}>Name: </label>
                <input onChange={onInputChange}  type ='text' name="Nombre" value={activity.Nombre} className={inputs}/>

                <label htmlFor="" className={texts}>Difficulty</label>
                <select  onChange={onInputChange}  name="Dificultad" value={activity.Dificultad} className={inputs}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>

                <label htmlFor="" className={texts}>Time(Hours)</label>
                <input onChange={onInputChange} type ='number' name="Duracion" value={activity.Duracion} className={inputs}/>

                <label htmlFor="" className={texts}>Season</label>
                <select onChange={onInputChange}  name="Temporada" value={activity.Temporada} className={inputs}>
                    <option value={'Summer'}>Summer</option>
                    <option value={'Winter'}>Winter</option>
                    <option value={'Autumn'}>Autumn</option>
                    <option value={'Spring'}>Spring</option>
                </select>

                <label className={texts}>countries: </label>
                <select onChange={saveCountry} name="Pais" className={inputs}>
                    {

                        countries.map(c=>{
                            return (
                                <option value={c.Nombre}>{c.Nombre}</option>
                                )
                            })
                    }
                </select>
                <div>
                    {
                        activity.countries.map(c =>
                            {return(
                                 <div>
                                    <ul>
                                        <li className={textscountries}>{c}</li>
                                    </ul>
                                </div>

                            )}
    
                            )
                    }
                </div>
                <input  type ='submit' value="Create" className={btn}></input>

           </form>
}

export default AddActivity;
