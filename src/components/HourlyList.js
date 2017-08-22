import React, { Component } from 'react'
import { Text, ScrollView, View } from 'react-native'
import { connect } from 'react-redux'
import { Header, HourView } from './'

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

	renderList() {
		return this.props.hourly_data.map((hour, index)=>{
			return (
				<HourView key={index} data={hour}/>
			)
		})
	}

	render() {
		return(
			<View style={styles.containerStyle}>
				<Header headerText={this.props.city}/>
				<ScrollView style={styles.containerStyle}>
					{this.renderList()}
				</ScrollView>
			</View>
		)
	}
}

const styles = {
	containerStyle: {
		backgroundColor: '#2B2B2B',
		flex: 1
	},
	textStyle: {
		color: 'white'
	}
}

const mapStateToProps = ({ weather }) => {
	const { hourly_data, city } = weather
	return {
		hourly_data,
		city
	}
}

export default connect(mapStateToProps)(HourlyList)