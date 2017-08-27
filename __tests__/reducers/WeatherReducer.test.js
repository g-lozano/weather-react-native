import WeatherReducer from '../../src/reducers/WeatherReducer'

import {
  FETCH_DAILY_DATA,
	FETCH_HOURLY_DATA
} from '../../src/actions/types'

describe('WeatherReducer', () => {
  it('should return daily_data and city in state', () => {
    const payload = {
      list: {},
      city: {
        name: 'San Jose'
      }
    }
    expect(WeatherReducer({}, {
      type: FETCH_DAILY_DATA,
      payload
    })).toMatchObject({
      daily_data: {},
      city: 'San Jose'
    })
  })

  it('should return hourly_data and city', () => {
    const payload = {
      list: {},
      city: {
        name: 'San Jose'
      }
    }
    expect(WeatherReducer({}, {
      type: FETCH_HOURLY_DATA,
      payload
    })).toMatchObject({
      hourly_data: {},
      city: 'San Jose'
    })
  })

})
