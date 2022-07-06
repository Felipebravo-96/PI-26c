import { AFRICA, ALL, ANTARTICA, ASCENDENTE, ASIA, DESCENDENTE, EUROPE, HIGH_P, LOW_P, NORTH_AMERICA, OCEANIA, SOUTH_AMERICA } from "../constantes/filtro"
import { SEARCH_COUNTRIES, GET_COUNTRIES, FILTER, FILTERBY, GET_ACTIVITIES, FILTER_ACTIVITY} from "./actions"


const initailState= {
    countries: [],
    activities: [],
    filtCountry:[]
}

function reducer (state = initailState, {type, payload}){
    switch (type) {
        case GET_COUNTRIES:
           return {
            ...state,
            countries: payload,
            filtCountry: payload
        }
        case SEARCH_COUNTRIES:
            return {
             ...state,
             filtCountry: payload
         }
        case GET_ACTIVITIES:
        return {
            ...state,
            activities: payload,
        } 
        case FILTER:
        let newOrder = [...state.countries]

        if(payload === ASCENDENTE || payload === DESCENDENTE){
            newOrder = newOrder.sort((a, b) =>{
                if(a.Nombre < b.Nombre){
                    return payload === ASCENDENTE ? -1 : 1;
                }if(a.Nombre > b.Nombre){
                    return payload === ASCENDENTE ? 1 : -1;
                }return 0;
            }) 
        }else if(payload === HIGH_P){
            newOrder = newOrder.sort((a, b) =>{
                if(a.Poblacion > b.Poblacion){
                    return payload === HIGH_P ? -1 : 1;
                }
            }) 
        }else if(payload === LOW_P){
            newOrder = newOrder.sort((a, b) =>{
                if(a.Poblacion < b.Poblacion){
                    return payload === LOW_P ? -1 : 1;
                }return 0;
            })
        }
        return{
            ...state,
            filtCountry: newOrder
        }
        case FILTERBY:
            let newFilter = [...state.countries]
            if(payload === AFRICA){
                newFilter = newFilter.filter(c => c.Continente ===  AFRICA)
            }else if(payload === ANTARTICA){
                newFilter = newFilter.filter(c => c.Continente ===  ANTARTICA)
            }else if(payload === ASIA){
                newFilter = newFilter.filter(c => c.Continente ===  ASIA)
            }else if(payload === EUROPE){
                newFilter = newFilter.filter(c => c.Continente ===  EUROPE)
            }else if(payload === NORTH_AMERICA){
                newFilter = newFilter.filter(c => c.Continente ===  NORTH_AMERICA)
            }else if(payload === OCEANIA){
                newFilter = newFilter.filter(c => c.Continente ===  OCEANIA)
            }else if(payload === SOUTH_AMERICA){
                newFilter = newFilter.filter(c => c.Continente ===  SOUTH_AMERICA)
            }else if(payload === ALL){
                newFilter = [...state.countries]
            }
            return{
                ...state,
                filtCountry: newFilter
            }
            case FILTER_ACTIVITY:
                let activityFilt = [...state.countries]
                let cambiante
                let prueba = [...state.activities]
                if(payload === ALL){
                    console.log('Hola')
                    cambiante = activityFilt
                }else{
                    prueba = prueba.filter(a => a.Nombre === payload)
                    let coutryActivity = (prueba[0].countries)
                    cambiante = coutryActivity
                }
                return{
                    ...state,
                    filtCountry: cambiante
                    }
            
        default:
            return state
    }
}
export default reducer;