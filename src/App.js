import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { compose, createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { persistStore, autoRehydrate } from 'redux-persist'

import reducers from './reducers'
import { View, Text, ViewPagerAndroid, ToastAndroid, AsyncStorage } from 'react-native';
import { Header } from './components/'
import DailyPager from './components/DailyPager'
import DayView from './components/DayView'
import LocationInput from './components/LocationInput'
import HourlyList from './components/HourlyList'

import { StackNavigator, TabNavigator } from 'react-navigation'

class App extends Component {
	render() {
		const store = createStore(reducers, {}, compose(
			applyMiddleware(ReduxThunk),
			autoRehydrate()
			)
		)

		persistStore(store, { storage: AsyncStorage, whitelist: ['search'] })

		const Screens = StackNavigator({
			search: { screen: LocationInput },
			weather: {
				screen: TabNavigator({
					Daily: { screen: DailyPager },
					Hourly: { screen: HourlyList }
				}, {
					tabBarOptions: {
						inactiveBackgroundColor: '#2B2B2B',
						activeBackgroundColor: '#2B2B2B',
						labelStyle: {
							fontSize: 18,
						}
					}
				})
			}
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

persistStore

export default App
