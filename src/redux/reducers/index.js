//create a state containing an array of countries
//make an action that lets us add a country to the array
//make an action that lets us delete a particular country from the array
import {countriesReducer} from './countries'
const state = {
  countries: []
}

const reducer =(prevState = state, action)=>{
  return {
    countries: countriesReducer(prevState.countries, action)
  }
}

export default reducer;
