import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

class HourView extends Component {
	render() {
		const { main: { temp }, weather, dt_txt } = this.props.data

		const hour = dt_txt.split(' ')[1]

		return (
			<View style={styles.itemStyle}>
				<View style={[styles.textViewStyle, { paddingLeft: 10 }]}>
					<Text style={styles.textStyle}>
						{Math.round(temp)+'° F'}
					</Text>
				</View>

				<View style={styles.textViewStyle}>
					<Text style={styles.textStyle}>
						{hour}
					</Text>
				</View>

				<View style={styles.textViewStyle}>
					<Text style={styles.textStyle}>
						{weather[0].main}
					</Text>
				</View>

				<View style={styles.textViewStyle}>
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
		height: 30,
		borderTopWidth: 1,
		borderColor: 'gray',
		flexDirection: 'row',
		alignItems: 'center'
	},
	textStyle: {
		color: 'white'
	},
	textViewStyle: {
		paddingRight: 10
	}
}

export { HourView }