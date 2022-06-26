const initailState= {
    countries: [],
    activities: []
}

function reducer (state = initailState, {type, payload}){
    switch (type) {
        case "GET_COUNTRIES":
           return {
            ...state,
            countries: payload
        }
    
        default:
            return state
    }
}
export default reducer;