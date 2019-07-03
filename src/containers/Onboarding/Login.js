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

function LoginForm() {
  const { state, dispatch, actions } = useContext(StoreContext);
  const [techInput, setTechInput] = useState("");

  return (
    <View>
      <Text>
        Username
      </Text>
      <TextInput
        name="tech"
        value={techInput}
        onChange={event => setTechInput(event.nativeEvent.text)}
      />
      <Text>
        Password
      </Text>
      <TextInput
        name="tech"
        value={techInput}
        onChange={event => setTechInput(event.nativeEvent.text)}
      />
      {/* <Button
        title="actions"
        onPress={() => actions.addTechIfNotInList(techInput)}
      />
      <Button
        title="dispatch"
        onPress={() =>
          dispatch({ type: types.ADD_TO_TECH_LIST, payload: techInput })
        }
      /> */}

      
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
