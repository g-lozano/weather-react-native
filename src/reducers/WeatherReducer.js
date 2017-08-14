import { 
	FETCH_DATA
} from '../actions/types'

const INITIAL_STATE = { 
	data: [],
	view_type: 'today_list'
}

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case FETCH_DATA:
			return { ...state, data: action.payload }
		default:
			return state
	}
}
