import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import StartScreen from '../containers/Onboarding/StartScreen';
import SignUp from '../containers/Onboarding/SignUp';
import Login from '../containers/Onboarding/Login';


const AppNavigator = createStackNavigator({
  StartScreen: { screen: StartScreen},
  SignUp: { screen: SignUp},
  Login: { screen: Login},
}, {
  initialRouteName: 'StartScreen',
  headerMode: 'none'
},);

export default createAppContainer(AppNavigator);