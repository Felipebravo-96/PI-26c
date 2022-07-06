import axios from 'axios';
export const GET_COUNTRIES  = 'GET_COUNTRIES';
export const SEARCH_COUNTRIES  = 'SEARCH_COUNTRIES';
export const FILTER  = 'FILTER';
export const FILTERBY = 'FILTERBY';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const FILTER_ACTIVITY = 'FILTER_ACTIVITY';

export function getAllCtr(){
    return (dispatch) =>{
        return axios('http://localhost:3001/api/countries/')
        .then(res => dispatch({type:GET_COUNTRIES, payload: res.data}))
    }
}

export function searchCountry(search){
    return (dispatch) =>{
        return axios('http://localhost:3001/api/countries?name='+ search)
        .then(res => dispatch({type:SEARCH_COUNTRIES, payload: res.data}))
    }   
}

export function getAllActivities(){
    return (dispatch) =>{
        return axios('http://localhost:3001/api/activities/')
        .then(res => dispatch({type:GET_ACTIVITIES, payload: res.data}))
    }
}

export function filter(order){
    return {
        type: FILTER,
        payload: order
    }
 }

export function filterBy(order){
return {
    type: FILTERBY,
    payload: order
}
}

export function filterActivity(order){
    return {
        type: FILTER_ACTIVITY,
        payload: order
    }
}

export function newActivity(payload){
    return async function(dispatch){
        const newActivity = axios.post('http://localhost:3001/api/activities/', payload)
        return newActivity;
    }
    }