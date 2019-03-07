import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import Dashboard from './Dashboard';
import Modal from './Modal';

import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Modal />
        <Route exact path="/" component={Dashboard} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  example: state.example
})

export default withRouter(connect(mapStateToProps)(App));
