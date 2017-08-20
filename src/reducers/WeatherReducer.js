import { 
	FETCH_DAILY_DATA,
	FETCH_HOURLY_DATA
} from '../actions/types'

const INITIAL_STATE = { 
	hourly_data: [],
	daily_data: [],
	view_type: 'today_list',
}

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case FETCH_DAILY_DATA:
			return { 
				...state, 
				daily_data: action.payload.list, 
				city: action.payload.city.name,
				error: '' 
			}
		
		case FETCH_HOURLY_DATA:
			return {
				...state,
				hourly_data: action.payload.list
			}

		default:
			return state
	}
}
