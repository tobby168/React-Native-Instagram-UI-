import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingLeft: 8,
    paddingRight: 8,
    flex: 1,
    backgroundColor: 'rgb(247,247,247)'
  },
  text: {
    fontSize: 14,
  }
});

export default class HomeNavBar extends Component {
  render() {
    console.log('component');
    
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello</Text>
      </View>
    );
  }
}