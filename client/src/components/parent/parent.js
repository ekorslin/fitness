import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Home";
import BodyChoice from "../bodyChoice";
import Routine from "../routine";
import "./parent.css";

class Parent extends Component {
  // Component's constructor.
  constructor(props) {
    // super(props) called to ensure that this.props is undefined in this constructor.
    super(props);
    // Setting the state for this component with empty date, time, email, and password keys.
  this.state = {
    bodyChoice: "",
  };
}
  // Function setting the state of the date key.
  onUpdate(parts) {
    this.setState({
      bodyChoice: parts
    });
  };


  // Function ensuring that the component mounts with the updated state key value pairs.
  componentDidUpdate() {
    console.log(this.state.bodyChoice);
  };



  render() {
    return (
      <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/workout" render={(props) => <BodyChoice {...props} click={this.onUpdate.bind(this)} />} />
            {/* <Route exact path="/bodyChoice" component={bodyChoice} /> */}
            <Route exact path="/routine" render={(props) => <Routine {...props} part={this.state.bodyChoice} />} />
            {/* <Route exact path="/routine" component={routine} /> */}
      </div>
    );
  }
}


export default Parent;
