import React, { Component } from 'react';
import './workout.css';

class bodyChoice extends Component {
  render() {
    return (
    <div><br/>
    <div className="card">
      <form><br/>
        <h4>Today's Workout:</h4>
    <select className="custom-select" name="bodyChoice">
      <option value="arms">Biceps & Triceps</option>
      <option value="cardio">Cardio</option>
      <option value="legs">Legs</option>
      <option value="chest">Chest & Back</option>
    </select><br/>
    </form>
    </div>
    </div>
    );
  }
}

export default bodyChoice;
