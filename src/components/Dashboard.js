import React from 'react';
import { connect } from 'react-redux';
import Schedule from './Schedule';

import '../styles/Dashboard.css';

function Dashboard(props) {
    return (
      <div className="dashboard">
        <div className="schedule-container">
          <Schedule />
        </div>
      </div>
    );
}

const mapStateToProps = state => ({
  
});

export default connect(mapStateToProps)(Dashboard);
