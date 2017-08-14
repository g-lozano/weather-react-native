import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
      <View style={ viewStyle } >
        <Text style={ textStyle }> {props.headerText} </Text>
      </View>
    );
};

const styles = {
  viewStyle: {
    backgroundColor: '#2B2B2B',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 30,
    color: '#4E76C9'
  }
}

export { Header };
