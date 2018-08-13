import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue'
  },
  text: {
    fontSize: 28,
  }
});

export default class Routes extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Story</Text>
      </View>
    );
  }
}