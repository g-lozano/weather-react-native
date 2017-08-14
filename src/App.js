import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import reducers from './reducers'
import { View, Text, ViewPagerAndroid, ToastAndroid } from 'react-native';
import { Header } from './components/'

class App extends Component {
	renderView() {
		return(
			<ViewPagerAndroid style={{ flex: 1 }} initialPage={0}> 
				<View>
					<Text>Test 1</Text>
				</View>
				<View>
					<Text>Test 2</Text>
				</View>
			</ViewPagerAndroid>
		)
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

		return(
			<Provider store={store}>
				<View style={{ flex: 1 }}>
					<Header headerText="Weather"/>
					{this.renderView()}
				</View>
			</Provider>
		)
	}
}

export default App
