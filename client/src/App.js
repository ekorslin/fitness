import React, { Component } from 'react';
import Parent from "./components/parent";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Navbar/>
          <Parent />
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;