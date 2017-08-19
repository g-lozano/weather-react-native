import axios from 'axios'

const APPID = ''

import { 
	FETCH_DATA,
	ZIP_CHANGED
} from './types'

const cb = (dispatch, data) => {
	dispatch({
		type: FETCH_DATA,
		payload: data
	})
}

export const fetchData = () => {
	return (dispatch, func) => {
		axios.get('https://api.openweathermap.org/data/2.5/forecast/daily?zip=95131,us&cnt=10&units=imperial&APPID=' + APPID)
		.then((data)=>{
			cb(dispatch, data.data.list)
		})
	}
}

export const zipChange = (zip) => {
	return {
		type: ZIP_CHANGED,
		payload: zip
	}
}

export const search = (navigate) => {
	return (dispatch, func) => {
		console.log(func().search.zip)
	}
}
