import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
  BackHandler,
  Alert
} from 'react-native';
//import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

export default class HomeScreen extends React.Component {


  //the following will remove the navigation bar at the top
  static navigationOptions = {
    header: null,
    title: 'Welcome',
  };





  static navigationOptions = {
    title: 'Welcome to the app!',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Show me more of the app" onPress={this._showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = () => {

    this.props.navigation.navigate('Other');
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});