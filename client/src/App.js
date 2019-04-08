import React, { Component } from 'react';
import './App.css';
import logo from './logo.png';
import style from './bootstrap.css';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import Launches from './components/launches';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <img 
          src={logo}
          alt="Space X" 
          style={{width: 300, display: 'block', margin: 'auto'}}/>
          <Launches/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
