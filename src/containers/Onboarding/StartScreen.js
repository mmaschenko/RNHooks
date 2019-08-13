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

// 1) v chem profit hooks mogut sprosit na doklade
// Hooks bring many benefits to React functional components.Specific benefits include:

// Abstracting logic with custom Hooks over render props for reduced syntax and elements in devTools
// Improved ability to share logic across components
// Ability to call useState without the need for state updater functions if referencing the current version of state
// Encapsulating side effects into their own function by area of concern
// Provide clean up logic for side effects in a central location compared to across three lifecycle methods
// 2) esli ne value v provider
// only value is allowed
// 3) lifecycle + updating render
// For example in setState function React uses the Object.is comparison algorithm. If value hasn't changed it will not rerender component
// 4) useState with object example

// function LoginForm() {
//   const [form, setValues] = useState({
//     username: '',
//     password: ''
//   });

//   const printValues = e => {
//     e.preventDefault();
//     console.log(form.username, form.password);
//   };

//   const updateField = e => {
//     setValues({
//       ...form,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <form onSubmit={printValues}>
//       <label>
//         Username:
//         <input
//           value={form.username}
//           name="username"
//           onChange={updateField}
//         />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input
//           value={form.password}
//           name="password"
//           type="password"
//           onChange={updateField}
//         />
//       </label>
//       <br />
//       <button>Submit</button>
//     </form>
//   );
// }


// Basic Hooks

// useState
// useEffect   + useLayoutEffect

// componentDidUpdate
// useEffect(
//   () => {
//     // componentDidMount   
//     window.addEventListener('keydown', handleEscapeKeyDown)
//     return () => {
//       // componentWillUnmount
//       window.removeEventListener('keydown', handleEscapeKeyDown);
//     };
//   },
//   [props.source],  // только когда эти props изменятся
// );

// useLayoutEffect
// Unlike componentDidMount and componentDidUpdate, the function passed to useEffect fires after layout and paint, during a deferred event.

// Normally this is not a problem.But if you want to manipulate DOM in the effect, and want to make sure it happens before browser paint, you need to use useLayoutEffect.The syntax is the same as useEffect.

//   Summary
// To sum it up, we can use useEffect hook to replace lifecycle methods, but they are not exactly the same.Try to think in hooks when you use them!




// Additional Hooks

// -------- useCallback + useMemo ---------------- shouldComponentUpdate
// useCallback(
//   doSomething()
// }, [dependencies])

// useMemo(() => {
//   doSomething()
// }, [dependencies])

// useEffect(() => {
//   doSomething()
// }, [dependencies])


// The main difference between the two is that ‘useCallback’ returns a memoized callback and ‘useMemo’ returns a memoized value that is the result of the function parameter.
// If you have to process a lot of data, ‘useMemo’ is the perfect Hook as it will do the work once at the first render and then return a cached version on every other render.

// ‘useCallback’, however, is used differently.Take for example a parent component that often re - renders.Inside the parent,
// we have a child component that takes a function-prop.At each re - render, the Child will re - execute its function prop uselessly.
// However, if you pass ‘useCallback’ as a prop with a dependency array, it resolves the issue because the function will be executed only
//  when the dependency changes.Every other re - render will then get a cached function.

// import React, { useState, useMemo, useCallback } from "react";

// const App = () => {
//   // We create two states that will keep count of the number of time all hooks are called
//   const [callbackCount, setCallbackCount] = useState(0);
//   const [memoCount, setMemoCount] = useState(0);

//   const memoFunction = () => {
//     console.log(memoCount, "memo called");
//     // Do something that will take a lot of processing ...
//   };

//   // Here if we give an empty array of dependencies, the callback function will return the old value of callbackCount
//   // because useCallback will return its memoized version
//   const callbackFunction = useCallback(() => {
//     console.log(callbackCount, "callback called");
//     // Do something with callbackCount ...
//     return callbackCount;
//   }, [callbackCount]);

//   // We create the memo hook, when memoCount changes, the function will be executed again
//   useMemo(memoFunction, [memoCount]);

//   return (
//     <>
//       {/* This component will receive a function that will change when the dependency value changes */}
//       <ChildComponent action={callbackFunction} />

//       {/* Change the callback hook dependency to trigger a change in the child */}
//       <button onClick={() => setCallbackCount(callbackCount + 1)}>
//         Change callback count
//       </button>

//       {/* After creating useMemo, each change of memoCount will trigger the function passed to the hook,
//     otherwise the memoized value will be returned */}
//       <button onClick={() => setMemoCount(memoCount + 1)}>
//         Change memo count
//       </button>
//     </>
//   );
// };

// const ChildComponent = ({ action }) => {
//   const [value, setValue] = useState(0)

//   useEffect(() => {
//     let val = action()
//     setValue(val)
//   }, [action])

//   return (
//     <>
//       Child : {value}
//     </>
//   )
// }


//  -------- useRef -----------------------------//





// useImperativeHandle
// useDebugValue

// ------------ create new hook ----------------------//

// Rules of Hooks
// It ain’t Fight Club, but we do have some rules to follow:

// Only call hooks at the top level of your function.Don’t put them in loops, conditionals, or nested functions.In order for React to keep track of your hooks, the same ones need to be called in the same order every single time.

// Only call hooks from React function components, or from custom hooks.Don’t call them from outside a component(what would that even do?).Keeping all the calls inside components and custom hooks makes your code easier to follow too, because all the related logic is grouped together.

// The names of hooks must start with “use”.Like useState or useEffect(well, not those two, those are taken).



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
