import React, { Component } from 'react'
import { Text, ScrollView, View } from 'react-native'
import { connect } from 'react-redux'

class HourlyList extends Component {
	static navigationOptions = {
		headerTitleStyle: {
			alignSelf: 'center',
			textAlign: 'center',
			color: 'gray',
			fontSize: 20
		},
		headerStyle: {
			backgroundColor: '#2B2B2B'
		}
	}
	render() {
		return(
			<ScrollView style={styles.containerStyle}>
				<Text>hi</Text>
			</ScrollView>
		)
	}
}

const styles = {
	containerStyle: {
		backgroundColor: '#2B2B2B'
	},
	textStyle: {
		color: 'white'
	}
}

const mapStateToProps = () => {
	return {}
}

export default connect(mapStateToProps)(HourlyList)