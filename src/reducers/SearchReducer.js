import { 
	ZIP_CHANGED
} from '../actions/types'

const INITIAL_STATE = { 
	zip: ''
}

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case ZIP_CHANGED:
			return { ...state, zip: action.payload }
		default:
			return state
	}
}
