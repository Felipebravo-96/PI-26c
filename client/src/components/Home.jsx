import { useEffect }  from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllCtr} from '../redux/actions'

function Home(){

     const dispatcher = useDispatch()
     const count = useSelector(state => state.countries)

     useEffect(() =>{
        dispatcher(getAllCtr())
     },[dispatcher])

    return (
        <div>
            {
                count && count.map(c =>{
                    return(
                    <div key= {c.id}>
                        <h3>{c.Nombre}</h3>
                        <img src={c.FlagImg} alt = {c.Nombre}></img>  
                    </div>
                    )
                })
            }

        </div>
    )
}
//<img src={c.FlagImg} alt = {c.Nombre}></img>
export default Home