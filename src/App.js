import React, { Component } from 'react';

import './App.css';

import Layout from './components/containers/Layout/Layout';
import ListContainer from './components/containers/ListContainer/ListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <ListContainer/>
        </Layout>
      </div>
    );
  }
}

export default App;
