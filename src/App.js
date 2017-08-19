import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import reducers from './reducers'
import { View, Text, ViewPagerAndroid, ToastAndroid } from 'react-native';
import { Header } from './components/'
import DailyPager from './components/DailyPager'
import DayView from './components/DayView'
import LocationInput from './components/LocationInput'

import { StackNavigator } from 'react-navigation'

class App extends Component {
	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

		const Screens = StackNavigator({
			search: { screen: LocationInput },
			dailypager: { screen: DailyPager },
			dayview: { screen: DayView }
		})
		return(
			<Provider store={store}>
				<View style={{ flex: 1 }}>
					<Screens />
				</View>
			</Provider>
		)
	}
}

export default App
