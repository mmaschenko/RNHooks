/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component, useContext, useState } from 'react';
import { Platform, StyleSheet, Text, View, Button, TextInput } from 'react-native';

import { StoreContext } from '../../context/StoreContext';
import types from '../../context/types'


type Props = {};

function App() {
  const { state, dispatch, actions } = useContext(StoreContext);
  const [techInput, setTechInput] = useState("");

  return (
    <View>
      <Text>LOGIN SCREEN</Text>
    </View>
  );
}

export default StartScreen = () => {
  return (
    <View>
      <Button
        title="Go to Details"
        onPress={() => this.props.navigation.navigate('Login')}
      />
      <App />
    </View>
    
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
