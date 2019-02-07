import React, {Component} from 'react'
import { StyleSheet, View } from 'react-native'
import NameConponent from '../components/name'

const styles = StyleSheet.create({
	container: {
	  flexDirection: 'column',
	  flex: 1,
	  justifyContent: 'center',
	  alignItems: 'center',
	  backgroundColor: '#F5FCFF',
	}
  })

export default class MainScreen extends Component {
  render() {
    return (
	  <View style={[styles.container, {}]}>
		<NameConponent firstName='John' lastName='Doe' color={{firstName: 'red', lastName: 'green'}}/>
		<NameConponent firstName='Janny' lastName='Doe' color={{firstName: 'purple', lastName: 'yellow'}}/>
      </View>
    );
  }
}
