import React, { Component } from 'react';
import './bodyChoice.css';

class bodyChoice extends Component {

  onClick = (event) => {
    var parts = document.getElementById("choice").value;
    alert("Today, you are planning to work out the " + parts);
    this.props.click(parts);
    this.props.history.push("/routine")
  };

  render() {
    return (
    <div><br/>
    <div className="card">
      <form><br/>
        <h4>Today's Workout:</h4>
    <select className="custom-select" id="choice" name="bodyChoice">
      <option value="arms">Biceps & Triceps</option>
      <option value="cardio">Cardio</option>
      <option value="legs">Legs</option>
      <option value="chest">Chest & Back</option>
    </select><br/>
    <button type="button" className="btn btn-outline-dark" onClick={this.onClick.bind(this)}>SUBMIT</button>
    </form><br/>
    </div>
    </div>
    );
  }
}

export default bodyChoice;
