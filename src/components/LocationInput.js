import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection, Input, Button } from './'
import { zipChange, fetchDailyData, fetchHourlyData } from '../actions'

class LocationInput extends Component {
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

	onZipChange(text) {
		this.props.zipChange(text)
	}

	onSearchButtonPress() {
		this.searchHandler()
	}

	onKeyPress(event) {
		if (event.nativeEvent.key == 'Enter')
			this.searchHandler()
	}

	searchHandler = () => {
		this.props.fetchDailyData(this.props.navigation.navigate)
		this.props.fetchHourlyData()
	}

	render() {
		return(
			<View style={styles.containerStyle}>
				<Card>
					<CardSection>
						<Input
							placeholder="Set Postal/Zip Code"
							onChangeText={this.onZipChange.bind(this)}
							onKeyPress={this.onKeyPress.bind(this)}
							value={this.props.zip}
						/>
					</CardSection>

					<CardSection>
						<Button onPress={this.onSearchButtonPress.bind(this)}>
							Search
						</Button>
					</CardSection>
				</Card>
			</View>
		)
	}
}

const mapStateToProps = ( { search } ) => {
	return {
		zip: search.zip
	}
}

const styles = {
	containerStyle: {
		flex: 1,
		backgroundColor: '#2B2B2B'
	}
}

export default connect(mapStateToProps, { zipChange, fetchDailyData, fetchHourlyData })(LocationInput)




