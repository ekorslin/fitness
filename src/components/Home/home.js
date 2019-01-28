import React, { Component } from 'react';
import './home.css';

class Home extends Component {

  onClick = (event) => {
    var lbs = this.refs.weight.value;
    alert("Today, you weigh in at " + lbs + " lbs.");
    this.props.history.push("/bodyChoice")
  };

  render() {
    return (
      <div><br/>
        {/* <p>Good morning, Eric</p> */}
        <div className="card">
        <div className="card-body">
        <form className="weight">
          <h4>Today's Weight:</h4>
          <input className="todayWeight" type="number" align="middle" ref="weight" id="todayWeight"/><br/><br/>
          <button type="button" className="btn btn-outline-secondary" onClick={this.onClick.bind(this)}>Submit</button>
        </form>
      </div>
      </div><br/>
      </div>
    );
  }
}

export default Home;
