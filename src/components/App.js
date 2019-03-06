import React, { Component } from 'react';
import Form from './Form';

import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Hello world!</p>
          <Form />
        </header>
      </div>
    );
  }
}

export default App;
