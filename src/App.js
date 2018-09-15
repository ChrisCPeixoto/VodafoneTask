import React, { Component } from 'react';

import './App.css';

import Layout from './components/containers/Layout/Layout';
import ListContainer from './components/containers/ListContainer/ListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-10 col-sm-12">
              <Layout>
                <ListContainer/>
              </Layout>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
