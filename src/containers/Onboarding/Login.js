/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component, useContext, useState } from 'react';
import { Platform, StyleSheet, Text, View, Button, TextInput } from 'react-native';

import LoaderOverlay from '../../components/LoaderOverlay'
import { StoreContext } from '../../context/StoreContext';
import { MAIN } from '../../context/types'


type Props = {};

function LoginForm() {
 
  const { state, dispatch, actions } = useContext(StoreContext);
  const [username, setUsernameInput] = useState("");
  const [password, setPasswordInput] = useState("");
  const { auth: { showLoader } } = state
  return (
    <View>
      <Text>
        Username
      </Text>
      <TextInput
        value={username}
        onChange={event => setUsernameInput('hello')}
      />
      <Text>
        Password
      </Text>
      <TextInput
        value={password}
        onChange={event => setPasswordInput(event.nativeEvent.text)}
      />
      <Button
        title="LOGIN"
        onPress={() => actions.loginUser({ username, password})}
      />
      <LoaderOverlay showOverlay={showLoader} />
    </View>
  );
}

export default StartScreen = (props) => {
  return (
    <View>
      <Button
        title="Go BACK"
        onPress={() => props.navigation.goBack()}
      />
      <LoginForm />
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
