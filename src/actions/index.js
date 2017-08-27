import axios from 'axios'

const APPID = ''

import {
	FETCH_DAILY_DATA,
	FETCH_HOURLY_DATA,
	ZIP_CHANGED,
	ZIP_ERROR
} from './types'

export const fetchDailyData = (navigate) => async (dispatch, func) => {
	let { data } = await axios.get('https://api.openweathermap.org/data/2.5/forecast/daily?cnt=10&units=imperial&zip='+func().search.zip+'&APPID=' + APPID)
	await dispatch({
		type: FETCH_DAILY_DATA,
		payload: data
	})
	navigate('weather', { title: data.city.name })
}

export const fetchHourlyData = () => async (dispatch, func) => {
	let { data } = await axios.get('https://api.openweathermap.org/data/2.5/forecast?units=imperial&zip='+func().search.zip+'&APPID=' + APPID)
	await dispatch({
		type: FETCH_HOURLY_DATA,
		payload: data
	})
}

export const zipChange = (zip) => {
	return {
		type: ZIP_CHANGED,
		payload: zip
	}
}
