import { 
	FETCH_DATA
} from '../actions/types'

const INITIAL_STATE = { 
	data: [],
	daily_data: [],
	view_type: 'today_list',
}

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case FETCH_DATA:
			return { ...state, daily_data: action.payload.list, city: action.payload.city.name, error: '' }
		default:
			return state
	}
}
