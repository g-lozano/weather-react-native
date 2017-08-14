import axios from 'axios'

import { 
	FETCH_DATA
} from './types'

const cb = (dispatch, data) => {
	dispatch({
		type: FETCH_DATA,
		payload: data
	})
}

export const fetchData = () => {
	return (dispatch, func) => {
		axios.get('')
		.then((data)=>{
			cb(dispatch, data.data.weather)
		})
	}
}