import React from 'react';
import { connect } from 'react-redux';
import Schedule from './Schedule';

import '../styles/Dashboard.css';

function Dashboard(props) {
    return (
      <div className="dashboard">
      
        <header>
          <h1 className="logo">CARFIX</h1>
        </header>

        <main>
          <div className="schedule-title">
            <h2>Schedule An Appointment</h2>
            <p>Please select an appointment time below.</p>
          </div>
          
          <div className="schedule-container">
            <Schedule />
          </div>
        </main>

      </div>
    );
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(Dashboard);
