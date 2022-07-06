import { useEffect, useState }  from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllCtr, getAllActivities} from '../../redux/actions'
import CountryCard from '../countryCard/CountryCard'
import {cotainers, containersC, buttons, buttons2} from './Home.module.css'

function Home(){

     const dispatcher = useDispatch()
     const count = useSelector(state => state.filtCountry)

     const [currentPage, setCurrentPage] = useState(0)
    
     
    
     useEffect(() =>{
        dispatcher(getAllCtr())
        dispatcher(getAllActivities())
     },[dispatcher])

     //Funciones para el paginado
     function countriesTen(){

        return count.slice(currentPage, currentPage+10)
       
     }

     function nextHandler(){
        console.log(currentPage)
        if(currentPage === 240){
            setCurrentPage(currentPage-240)
        }else{
            setCurrentPage(currentPage+10)
        }
     }

     function prevHandler(){
        if(currentPage > 0) setCurrentPage(currentPage-10)
    }


    return (
        <div className={cotainers}>
            <div>
                <div className={containersC}>
                    {
                        countriesTen() && countriesTen().map((c,i) =>{
                            return(
                            
                                <CountryCard key={i}
                                    FlagImg={c.FlagImg}  
                                    Nombre={c.Nombre}
                                    Continente={c.Continente}
                                    Poblacion={c.Poblacion}
                                    Id ={c.Id}
                                    />  
                            
                            )
                        })
                    }
                </div>
                        <button onClick={prevHandler} className={buttons}>Prev</button>
                        <button onClick={nextHandler} className={buttons2}>Next</button>
            </div>

        </div> 

    )
}
//<img src={c.FlagImg} alt = {c.Nombre}></img>
export default Home;
