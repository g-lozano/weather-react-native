import { combineReducers } from 'redux'
import WeatherReducer from './WeatherReducer'

console.log(JSON.stringify(WeatherReducer))

export default combineReducers({
	weather: WeatherReducer
})