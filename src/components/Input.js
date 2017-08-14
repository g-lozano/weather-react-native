import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ( { placeholder, value, onChangeText, label, secureTextEntry, onKeyPress } ) => {
	const { inputStyle, labelStyle, containerStyle } = styles;

	return(
		<View style={containerStyle}>
			<TextInput
				autoCapitalize='none'
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
				underlineColorAndroid='rgba(0,0,0,0)'
				style={inputStyle}
				value={value}
				onChangeText={onChangeText}
				onKeyPress={onKeyPress}
				autoCorrect={false}
				placeholderTextColor='gray'
			/>
		</View>
	)
};

const styles = {
	inputStyle: {
		color: 'white',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 3,
	},
	containerStyle:  {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
}

export { Input };