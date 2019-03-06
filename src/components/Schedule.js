import React from 'react';
import { connect } from 'react-redux';

import '../styles/Schedule.css';

function Schedule(props) {
    return (
      <div className="schedule">
        {props.test}
      </div>
    );
}

const mapStateToProps = state => ({
  // loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Schedule);
