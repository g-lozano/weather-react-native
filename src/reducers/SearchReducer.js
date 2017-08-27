import {
	ZIP_CHANGED,
	ZIP_ERROR
} from '../actions/types'

const INITIAL_STATE = { 
	zip: '',
	error: ''
}

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case ZIP_CHANGED:
			return { ...state, zip: action.payload }
		case ZIP_ERROR:
			return { ...state, error: 'Zip code is invalid.'}
		default:
			return state
	}
}
