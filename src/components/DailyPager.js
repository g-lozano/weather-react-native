import React, { Component } from 'react'
import { View, Text, ScrollView, Platform, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { fetchData } from '../actions'
import DayView from './DayView'
import { TabNavigator } from 'react-navigation'

const deviceWidth = Dimensions.get('window').width;

class DailyPager extends Component {
	static navigationOptions = ({ navigation }) => {
		return{
			title: 'Daily Weather',
			headerLeft: (
				<Text>&lt;</Text>
			),
			headerTitleStyle: {
				alignSelf: 'center',
				textAlign: 'center',
				color: '#4E76C9',
				fontSize: 25
			},
			headerStyle: {
				backgroundColor: '#2B2B2B'
			}
		}
	}

	componentWillMount() {
		this.props.fetchData()
	}

	renderViews() {
		return this.props.daily_data.map((day, index)=>{
			var today = false
			if (index == 0) today = true
			
			return(
				<View key={index} style={{flex: 1, width: deviceWidth}}>
					<DayView day={day} today={today}/>
				</View>
			)
		})
	}

	renderViewPager() {
		if (!this.props.daily_data.length)
			return(
				<View style={{flex: 1, justifyContent: 'center', backgroundColor: '#2B2B2B'}}>
					<Text style={{alignSelf: 'center', color: 'white', fontSize: 25}}>loading...</Text>
				</View>
			)
		else {
			return (
				<ScrollView
					horizontal
					pagingEnabled
				>
					{this.renderViews()}
				</ScrollView>
			)			
		}
			
	}

	render() {
		return(
			<View style={{flex: 1}}>
				{this.renderViewPager()}
			</View>
		)
	}
}

const mapStateToProps = ({ weather }) => {
	return {
		daily_data: weather.daily_data
	}
}

export default connect(mapStateToProps, { fetchData })(DailyPager)
