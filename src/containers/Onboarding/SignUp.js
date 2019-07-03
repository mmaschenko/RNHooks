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
      <Button
        title="Go to Details"
        onPress={() => this.props.navigation.navigate('Login')}
      />
      <Text>Hooks11 - The Redux Killer</Text>
      <Text>
        Try to add duplicate items with both Direct dispatch and Action logic
      </Text>
      <TextInput
        name="tech"
        value={techInput}
        onChange={event => setTechInput(event.nativeEvent.text)}
      />
      <Button
        title="actions"
        onPress={() => actions.addTechIfNotInList(techInput)}
      />
      <Button
        title="dispatch"
        onPress={() =>
          dispatch({ type: types.ADD_TO_TECH_LIST, payload: techInput })
        }
      />

      <View>
        <Text>
          state.techList
        </Text>
      </View>
      {state.techList.map(tech => (
        <View key={tech}>
          <Text>{tech}</Text>
          <Button
            title="Remove"
            onPress={() =>
              dispatch({ type: types.REMOVE_FROM_TECH_LIST, payload: tech })
            }
          />
        </View>
      ))}
    </View>
  );
}

export default StartScreen = () => {
  return (
    <App />
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
