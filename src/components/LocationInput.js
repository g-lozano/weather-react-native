import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection, Input, Button } from './'
import { zipChange, fetchData } from '../actions'

class LocationInput extends Component {
	static navigationOptions = {
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

	searchHandler() {
		this.props.fetchData(this.props.navigation.navigate)
	}

	render() {
		return(
			<View style={styles.containerStyle}>
				<Card>
					<CardSection>
						<Input
							placeholder="Enter Zip Code"
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

export default connect(mapStateToProps, { zipChange, fetchData })(LocationInput)




