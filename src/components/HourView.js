import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

import getIcon from '../functions/getIcon'

const SHORT_DAY = [
	'SUN',
	'MON',
	'TUES',
	'WED',
	'THURS',
	'FRI',
	'SAT'
]


class HourView extends Component {
	getTime(time) {
		const hour = time.getHours() + 1
		const i = (time.getDay() + (hour === 24 ? 1 : 0))%7

		var formatted_hour = ''

		if (hour == 24) formatted_hour = '12 AM'
		else if (hour < 12) formatted_hour = hour + ' AM'
		else if (hour > 12) formatted_hour =  hour%12 + ' PM'
		else formatted_hour =  '12 PM'

		var day = SHORT_DAY[i]

		return { formatted_hour, day }
	}
	render() {
		const { main: { temp }, weather, dt_txt, dt } = this.props.data

		var i = new Date(dt*1000);

		const time = this.getTime(i)
		const icon = getIcon(weather[0].main)

		return (
			<View style={styles.itemStyle}>
				<View style={[styles.textViewStyle, { flex: 1, alignItems: 'center' }]}>
					<Text style={styles.textStyle}>
						{time.formatted_hour}
					</Text>
					<Text style={styles.textStyle}>
						{time.day}
					</Text>
				</View>

				<View style={[styles.textViewStyle, { flex: 1 }]}>
					<Text style={styles.textStyle}>
						{Math.round(temp)+'° F'}
					</Text>
				</View>

				<View style={{ flex: 1, paddingRight: 7 }}>
					<Image
			          style={{width: 40, height: 40}}
			          source={icon}
			        />
				</View>

				<View style={[styles.textViewStyle, { flex: 1 }]}>
					<Text style={styles.textStyle}>
						{weather[0].main}
					</Text>
				</View>

				<View style={[styles.textViewStyle, { flex: 3, alignItems: 'center' }]}>
					<Text style={styles.textStyle}>
						{weather[0].description}
					</Text>
				</View>
			</View>
		)
	}
}

const styles = {
	itemStyle: {
		borderTopWidth: 1,
		borderColor: 'gray',
		flexDirection: 'row',
		alignItems: 'center',
		padding: 5
	},
	textStyle: {
		color: 'white',
		fontSize: 12
	},
	textViewStyle: {
		paddingRight: 5
	}
}

export { HourView }
