import React from 'react';
import { createStore } from 'redux'
import CounterApp from './src/CounterApp.js'




const reducer = () => {
}

const store = createStore(reducer)


export default class App extends React.Component {



  render() {
    return (
      <CounterApp/>
    );
  }
}

