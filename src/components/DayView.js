import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { fetchData } from '../actions'

const DAYS = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
]

class DayView extends Component {
	render() {
		const { containerStyle, dayStyle, mainStyle, descStyle } = styles

		const { dt, weather } = this.props.day
		const { main, description } = weather[0]

		var i = new Date(dt*1000);
		var dayOfWeek = DAYS[i.getDay()]
		if (this.props.today) dayOfWeek = 'Today'

		return(
			<View style={{flex: 1}}>
				<View style={containerStyle}>
					<Text style={dayStyle}>{dayOfWeek}</Text>
				</View>
				<View style={{justifyContent: 'flex-end', paddingBottom: 30}}>
					<Text style={mainStyle}>{main}</Text>
					<Text style={descStyle}>{description}</Text>
				</View>
			</View>
		)
	}
}

const styles = {
	containerStyle: {
		flex: 1,
		alignItems: 'center',
		paddingTop: 30
	},
	dayStyle: {
		fontSize: 40,
		alignSelf: 'center'
	},
	mainStyle: {
		fontSize: 25,
		alignSelf: 'center'
	},
	descStyle: {
		fontSize: 20,
		alignSelf: 'center'
	}
}

export default DayView
