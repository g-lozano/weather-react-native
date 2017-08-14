import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { fetchData } from '../actions'

class DayView extends Component {
	componentWillMount() {
		// this.props.fetchData()
	}
	renderList() {
		return this.props.data.map((day)=>{
			return (
				<Text>
					{day.main}
				</Text>
			)
		})
	}
	render() {
		return(
			<View>{this.renderList()}</View>
		)
	}
}

const mapStateToProps = ({ weather }) => {
	return {
		data: weather.data
	}
}

export default connect(mapStateToProps, { fetchData })(DayView)