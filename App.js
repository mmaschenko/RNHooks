/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component, useContext, useState} from 'react';
import { Platform, StyleSheet, Text, View, Button, TextInput} from 'react-native';

import { StoreContext, StoreProvider} from './src/context/StoreContext';
import types from './src/context/types';
import AppNavigator from './src/navigator/AppNavigator'
export default InitialApp = () => {
  return(
    <StoreProvider>
      <AppNavigator/>
    </StoreProvider>
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
