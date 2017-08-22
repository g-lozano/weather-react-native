import React, { Component } from 'react'
import { View, Text, ScrollView, Platform, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { TabNavigator } from 'react-navigation'
import { Header, DayView } from './'

const deviceWidth = Dimensions.get('window').width;

class DailyPager extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			headerStyle: {
				backgroundColor: '#2B2B2B'
			}
		}
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
				<View style={styles.containerStyle}>
					<Text style={styles.textStyle}>loading...</Text>
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
				<Header headerText={this.props.city}/>
				{this.renderViewPager()}
			</View>
		)
	}
}

const styles = {
	textStyle: {
		alignSelf: 'center', 
		color: 'white', 
		fontSize: 25
	},
	containerStyle: {
		flex: 1, 
		justifyContent: 'center', 
		backgroundColor: '#2B2B2B'
	}
}

const mapStateToProps = ({ weather }) => {
	const { daily_data, city } = weather
	return {
		daily_data,
		city
	}
}

export default connect(mapStateToProps)(DailyPager)
