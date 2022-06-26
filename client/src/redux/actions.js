import axios from 'axios';

export function getAllCtr(){
    return (dispatch) =>{
        return axios('http://localhost:3001/api/countries/')
        .then(res => dispatch({type:'GET_COUNTRIES', payload: res.data}))
    }
}