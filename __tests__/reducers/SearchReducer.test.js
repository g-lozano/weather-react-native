import SearchReducer from '../../src/reducers/SearchReducer'
import {
	ZIP_CHANGED,
	ZIP_ERROR
} from '../../src/actions/types'

describe('SearchReducer', () => {
	var currentState = {
		zip: '',
		error: ''
	}

  it('should return zip code', () => {
		const zip = '95125'
		const nextState = SearchReducer(currentState, {
      type: ZIP_CHANGED,
      payload: zip
    })
    expect(nextState).toMatchObject({ ...currentState, zip })
  })

  it('should return error on invalid zip', () => {
		const nextState = SearchReducer(currentState, {
      type: ZIP_ERROR,
      payload: 'x95125x'
    })
    expect(nextState).toMatchObject({ error: 'Zip code is invalid.' })
  })

	it('should return same state when action type is invalid', () => {
		const nextState = SearchReducer(currentState, {
      type: 'invalid_type',
      payload: 'invalid_data'
    })
		expect(nextState).toMatchObject(currentState)
	})
})
