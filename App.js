import React from 'react';
import { createStore } from 'redux'
import CounterApp from './src/CounterApp.js'
import {Provider} from 'react-redux'

const initialState = {
  counter :0
}

const reducer = (state = initialState) => {
  return state
}

const store = createStore(reducer)


export default class App extends React.Component {



  render() {
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
      
    );
  }
}

