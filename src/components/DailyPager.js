import React, { Component } from 'react'
import { View, Text, ScrollView, ViewPagerAndroid } from 'react-native'
import { connect } from 'react-redux'
import { fetchData } from '../actions'
import DayView from './DayView'

class DailyPager extends Component {
	componentWillMount() {
		this.props.fetchData()
	}

	renderViews() {
		return this.props.daily_data.map((day, index)=>{
			var today = false
			if (index == 0) today = true
			
			return(
				<View key={index}>
					<DayView day={day} today={today}/>
				</View>
			)
		})
	}

	renderViewPager() {
		if (!this.props.daily_data.length)
			return(
				<View style={{flex: 1}}>
					<Text>loading...</Text>
				</View>
			)
		else
			return(
				<ViewPagerAndroid style={{flex: 1}}>
					{this.renderViews()}
				</ViewPagerAndroid>
			)
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
