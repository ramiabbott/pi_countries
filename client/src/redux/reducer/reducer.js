


import {
    GET_COUNTRIES,
    CLEAN_COUNTRIES,
    FILTER_BY_CONTINENTS,
    ORDER_BY_CRITERIA,
    ORDER_BY_POPULATION,
    GET_ALL_ACTIVITIES,
    GET_DETAIL,
    GET_BY_NAME,
    CREATE_ACTIVITIES,
    BY_TACTIVITIES
} from '../action/action-Type'



const initialState = {
    countries : [],
    countriesCopy : [],
    continents: [],
    tactivity: [],
    detail: [],
    countriesName: [],
    formActivities: []
}


function rootReducer (state=initialState, action) {
    switch(action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                countriesCopy: action.payload
            };
        case GET_BY_NAME:
           
            return {
                ...state,
                countries: action.payload

            }
        case CLEAN_COUNTRIES:
            return {
                ...state,
                countries: []
            };
            case FILTER_BY_CONTINENTS:
                const allCountries = state.countriesCopy
                const filteredContinents = action.payload === 'todo' ? allCountries : allCountries.filter(el => el.continents === action.payload)
                console.log(filteredContinents)
                return {
                    ...state,
                    countries: filteredContinents
                };
            case ORDER_BY_CRITERIA:
                if (action.payload === 'a-z'){
                    return {
                        ...state,
                        countries: [...state.countries].sort((a,b) => a.name.localeCompare(b.name))
                    }
                } else if (action.payload === 'z-a'){
                    return {
                        ...state,
                        countries: [...state.countries].sort((a,b) => b.name.localeCompare(a.name))
                    }
                }
                return {
                ...state,
                countries: state.countries,
                };
            case ORDER_BY_POPULATION:
                action.payload === 'min' ?
                state.countries.sort(function(a, b){
                   if(Number(a.population )> Number(b.population)) {
                    return 1
                }
                  if(Number(b.population) > Number(a.population)){
                    return -1
                  }
                  return 0
                }):
                state.countries.sort(function(a, b){
                    if(Number(a.population) > Number(b.population)) {
                        return -1
                    }
                      if(Number(b.population) > Number(a.population)){
                        return 1
                      }
                      return 0
                })
            return{
                ...state,
                countries: state.countries
            }
                case GET_ALL_ACTIVITIES:
                    return {
                        ...state,
                        tactivity: action.payload,
                    }
            case GET_DETAIL:
                return {
                    ...state,
                    detail: action.payload
                }
            case CREATE_ACTIVITIES:
                return {
                    ...state,
                    formActivities: action.payload
                }
            case BY_TACTIVITIES:
                const actfilter =  state.countriesCopy.filter(e => e.tactivities.length > 0) 
                console.log(actfilter)
                return {
                    ...state,
                    countries: actfilter
                }
    	default:
			return state
    }
}

export default rootReducer