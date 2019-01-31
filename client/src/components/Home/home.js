import React, { Component } from 'react';
import axios from "../../api/axios";
import './home.css';

class Home extends Component {

  onClick = (event) => {
    var lbs = this.refs.weight.value;
    axios.post("/weighIn", {
      weight: lbs
    }).then(function(res) {
      alert("Today, you weigh in at " + lbs + " lbs.");
      window.location.href="/workout";
    })
    .catch(function (error) {
      console.log(error);
    });
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
          <button type="button" className="btn btn-outline-dark" onClick={this.onClick.bind(this)}>SUBMIT</button>
        </form>
      </div>
      </div><br/>
      </div>
    );
  }
}

export default Home;
