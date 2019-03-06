import React, { Component } from 'react';
import Form from './Form';
import Schedule from './Schedule';

import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

          <p>Hello world!</p>

          <div className="form-container">
            <Form />
          </div>

          <div className="schedule-container">
            <Schedule test="wordup g" />
          </div>

      </div>
    );
  }
}

export default App;
