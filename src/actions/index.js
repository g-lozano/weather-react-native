import axios from 'axios'

const APPID = ''

import { 
	FETCH_DATA,
	ZIP_CHANGED,
	ZIP_ERROR
} from './types'

const cb = async (dispatch, data, navigate) => {
	await dispatch({
		type: FETCH_DATA,
		payload: data
	})
	navigate('dailypager', { title: data.city.name })
}

export const fetchData = (navigate) => async (dispatch, func) => {
	let { data } = await axios.get('https://api.openweathermap.org/data/2.5/forecast/daily?cnt=10&units=imperial&zip='+func().search.zip+'&APPID=' + APPID)
	cb(dispatch, data, navigate)
}

export const zipChange = (zip) => {
	return {
		type: ZIP_CHANGED,
		payload: zip
	}
}
