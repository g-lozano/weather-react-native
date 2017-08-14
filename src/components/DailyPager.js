import React, { Component } from 'react'
import { ViewPagerAndroid, View, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { fetchData } from '../actions'

class DailyPager extends Component {
	componentWillMount() {
		this.props.fetchData()
	}

	renderViews() {
		return this.data.map((day, index)=>{
			return(
				<View key={index}>
					<Text>test</Text>
				</View>
			)
		})
	}

	render() {
		return(
			<ViewPagerAndroid horizontal={true}>
				{this.renderViews()}
			</ViewPagerAndroid>
		)
	}
}

const mapStateToProps = ({ weather }) => {
	return {
		data: weather.data
	}
}

export default connect(mapStateToProps, { fetchData })(DailyPager)