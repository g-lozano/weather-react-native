import { combineReducers } from 'redux'
import WeatherReducer from './WeatherReducer'
import SearchReducer from './SearchReducer'

export default combineReducers({
	weather: WeatherReducer,
	search: SearchReducer
})