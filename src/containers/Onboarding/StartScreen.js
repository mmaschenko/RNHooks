/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


// Доклад
// 1) Context
// 2) Hooks:
// useState
//   - useState does not automatically merge update objects
//     - multiple https://daveceddia.com/usestate-hook-examples/
// useEffect
//   - replace componentDidMount и componentDidUpdate
//     - array, []
// useContext
// useProvider
//   - create new hook use....
// 3) Redux + Hooks

// v chem profit hooks mogut sprosit na doklade
// esli ne value v provider
// lifecycle + updating render
// useState with object example

import React, { Component, useContext, useState, createContext } from 'react';
import { Platform, StyleSheet, Text, View, Button, TextInput } from 'react-native';

import { StoreContext } from '../../context/StoreContext';
import { MAIN } from '../../context/types'

const UserContext = React.createContext();


class App1 extends React.Component{
  state ={
    user: 'Mikle',
    lastname: '123'
  }

  render(){
    const {user, lastname} = this.state;
    return(
      // <UserContext.Provider value={this.state.user}>
      <UserContext.Provider value={{user, lastname}}>
        <NavBar/>
      </UserContext.Provider>
    )
  }
}

function NavBar(){
  // const value = useContext(UserContext)
  // const {user, lastname} = useContext(UserContext)
  return(
    // <UserContext.Consumer>
    //   {(value) => <Text>Hello {value}</Text>} // 2 return
    // </UserContext.Consumer>
    <UserContext.Consumer>
      {(value) => <Text>Hello {value}</Text>}
    </UserContext.Consumer>
  )
}


    // <ThemeContext.Provider value={theme}>   // multiple providers
    //   <UserContext.Provider value={signedInUser}>
    //     <Layout />
    //   </UserContext.Provider>
    // </ThemeContext.Provider>


    // <ThemeContext.Consumer>
    //   {theme => (
    //     <UserContext.Consumer>
    //       {user => (
    //         <ProfilePage user={user} theme={theme} />
    //       )}
    //     </UserContext.Consumer>
    //   )}
    // </ThemeContext>
    // <UserContext.Consumer>



type Props = {};

function App() {
  const { state, dispatch, actions } = useContext(StoreContext);
  const { main: { techList } } = state
  const [techInput, setTechInput] = useState("");
  return (
    <View>
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
          dispatch({ type: MAIN.ADD_TO_TECH_LIST, payload: techInput })
        }
      />
      <View>
        <Text>
          state.main.techList
        </Text>
      </View>
      {techList.map(tech => (
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

export default StartScreen = (props) => {
  return (
    <View>
      <App />
      <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate('Login')}
      />
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
