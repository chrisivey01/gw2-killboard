import React, { Component } from 'react';



import Main from './Container/Main';
import Header from './Container/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Yaks Bend WVW Ranks</h1>
            <Header/>
        </header>
          <Main/>
      </div>
    );
  }
}

export default App;
