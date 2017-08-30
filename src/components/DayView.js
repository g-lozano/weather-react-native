import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

import getIcon from '../functions/getIcon'

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

		const { dt, weather, temp } = this.props.day
		const { main, description } = weather[0]

		var i = new Date(dt*1000);
		var dayOfWeek = this.props.today ? 'Today' : DAYS[i.getDay()]
		var timeOfDay = dayOfWeek === 'Today' ? new Date().getHours() : 12

		var icon = getIcon(weather[0].main, timeOfDay)

		return(
			<View style={containerStyle}>
				<View style={{ flex: 1 }}>
					<Text style={dayStyle}>{dayOfWeek}</Text>
				</View>

				<View style={{ flex: 3 }}>
					<Image
			          style={{width: 100, height: 100}}
			          source={icon}
			        />
					<Text style={mainStyle}>{main}</Text>
				</View>

				<View style={{ flex: 1 }}>
					<Text style={descStyle}>{Math.round(temp.day)+'° F'}</Text>
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
		paddingTop: 30,
		backgroundColor: '#2B2B2B'
	},
	dayStyle: {
		fontSize: 40,
		alignSelf: 'center',
		color: '#4E76C9'
	},
	mainStyle: {
		fontSize: 25,
		alignSelf: 'center',
		paddingTop: 30,
		color: 'white'
	},
	descStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'white'
	}
}

export { DayView }
