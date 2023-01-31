import axios from 'axios'

import  { GET_COUNTRIES,
        FILTER_BY_CONTINENTS,
        ORDER_BY_CRITERIA,
        ORDER_BY_POPULATION,
        GET_ALL_ACTIVITIES,
        GET_DETAIL,
        GET_BY_NAME,
        CREATE_ACTIVITIES
    }  from './action-Type';






export function getCountries() {
    
        return async function(dispatch) {
            try {
                let countries = await axios.get('http://localhost:3001/countries');
                dispatch({
                   type: GET_COUNTRIES,
                   payload: countries.data
               })
            } catch (error) {
                console.log(error)
            }
       
        }

    }


export function filterContinents(payload) {
    return {
        type: FILTER_BY_CONTINENTS,
        payload
    }
}

// export function filterCreate(payload) {
//    console.log(payload)
//     return async function(dispatch) {
//         let activities = await axios.get('http://localhost:3001/activities');
//         dispatch({
//             type: FILTER_CREATE,
//             payload: activities.data
//                })  
//   }
// }
export const orderByCriteria = (value) => {
    return { type: ORDER_BY_CRITERIA,
             payload: value
             }
}
  
export const orderByPopulation = (payload) => {
    return {
        type: ORDER_BY_POPULATION,
        payload
    }
}


export const getActivities = () => {
    return async (dispatch) => {
            const tactivity = await axios.get('http://localhost:3001/activities')
            return dispatch({ 
                type: GET_ALL_ACTIVITIES, 
                payload: tactivity.data })
       
    }
}


export function getDetail(id) {
    return async function(dispatch) {
     try {
        let response = await axios.get(`http://localhost:3001/countries/${id}`);
        dispatch({
           type: GET_DETAIL,
           payload: response.data
       })
     } catch (error) {
        console.log(error)
     }
    }
}

export function getByName(name) {
    return async function(dispatch) {
        try {
            let response = await axios.get('http://localhost:3001/countries?name='+name);
            dispatch({
                type: GET_BY_NAME,
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
     
}
}

export function createActivities (payload) {   
    return async function (dispatch) {
            console.log(payload)
            try {
                let response = await axios.post("http://localhost:3001/activities", payload);
                    console.log(response.data)
                return dispatch({
                    type: CREATE_ACTIVITIES,
                    payload: response.data
          })
            } catch (error) {
                console.log(error)
            }
        
    }  
}