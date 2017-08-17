import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import reducers from './reducers'
import { View, Text, ViewPagerAndroid, ToastAndroid } from 'react-native';
import { Header } from './components/'
import DailyPager from './components/DailyPager'
import DayView from './components/DayView'

class App extends Component {
	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

		return(
			<Provider store={store}>
				<View style={{ flex: 1 }}>
					<Header headerText="Weather App"/>
					<DailyPager />
				</View>
			</Provider>
		)
	}
}

export default App
