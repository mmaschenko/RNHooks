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
import types from './src/context/types'

console.log('types', types);
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
//  class App extends Component<Props> {

//   addToList(){
//     // addTechIfNotInList()
//   }

//   render() {
//     console.log('this.props', this.props);
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//         <Button title="PRESS ME" onPress={this.addToList}/>
//       </View>
//     );
//   }
// }

function App() {
  const { state, dispatch, actions } = useContext(StoreContext);
  const [techInput, setTechInput] = useState("");

  return (
    <View>
      <Text>Hooks - The Redux Killer</Text>
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

export default InitialApp = () => {
  // const { state, dispatch, actions } = useContext(StoreContext);
  return(
    <StoreProvider><App /></StoreProvider>
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
