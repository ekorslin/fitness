import React, { Component } from 'react';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div><br/>
        {/* <p>Good morning, Eric</p> */}
        <div className="card">
        <div className="card-body">
        <form className="weight">
          <h4>Today's Weight:</h4>
          <input className="todayWeight" align="middle" id="todayWeight"/><br/><br/>
          <button type="button" className="btn btn-outline-secondary">Submit</button>
        </form>
      </div>
      </div><br/>
      </div>
    );
  }
}

export default Home;
