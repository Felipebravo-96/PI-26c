import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AFRICA, ALL, ANTARTICA, ASIA, EUROPE, NORTH_AMERICA, OCEANIA, SOUTH_AMERICA } from "../../constantes/filtro"
import { filterActivity, filterBy, getAllActivities } from "../../redux/actions"
import {filtroC, filtroA} from './filter.module.css'

function Filter(){
const activities =useSelector(state => state.activities)
const dispatch = useDispatch()




useEffect(() =>{
    dispatch(getAllActivities())
 },[dispatch])

    function onSelectedChange(change){
        
        dispatch(filterBy(change.target.value))
    }

    function filterChange(change){
       dispatch(filterActivity(change.target.value))
    }

    return<div>
            <div>
                <select name="Filter" onChange={onSelectedChange} className={filtroC}>
                    <option value={ALL}> All </option>
                    <option value={AFRICA} >Africa</option>
                    <option value={ANTARTICA} >Antarctica</option>
                    <option value={ASIA}>Asia</option>
                    <option value={EUROPE}>Europe</option>
                    <option value={NORTH_AMERICA} >North America</option>
                    <option value={OCEANIA} >Oceania</option>
                    <option value={SOUTH_AMERICA} >South America</option>
                </select>
            </div>
            <div>
                    {
                        activities.length>0 ?
                        <select name = 'FilterActivity' onChange={filterChange} className= {filtroA}>
                            <option value={ALL}> All </option>
                            {
                                activities.map(a =>{
                                    return <option key={a.id} value={a.Nombre}> {a.Nombre} </option>
                                })
                            }
                        </select>:
                        <select className= {filtroA}>
                            <option selected disabled>No activities Yet</option>
                        </select>
                    }
               
            </div>
          </div>

}

export default Filter