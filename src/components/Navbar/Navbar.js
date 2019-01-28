// import React from "react";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


class Navbar extends Component {

  openNav = (event) => {
    document.getElementById("mySidenav").style.width = "250px";
  };

  closeNav = (event) => {
    document.getElementById("mySidenav").style.width = "0";
  };

  render () {
    return (

  <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
  <div className="nav-wide">
    <Link className="navbar-brand" to="/">
      <img src="squat.jpg" alt="Logo" id="squat"/>{"   "}   
    </Link>
    <div>
      <ul className="navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/about"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/" className="nav-link">
            HOME
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/archives" ||
            window.location.pathname === "/archives"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/archives" className="nav-link">
            ARCHIVES
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/contact"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/contact" className="nav-link">
            STATISTICS
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/contact"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/contact" className="nav-link">
            CONTACT
          </Link>
        </li>
      </ul>
      </div>
      </div>
      <div className="sidenav-div">
        <div className="navbar-brand">
        <img src="toggle.png" alt="toggle" id="toggle" onClick={this.openNav}/>
        <img src="squat.jpg" alt="squat" id="squat"/>
        </div>
      <div id="mySidenav" className="sidenav">
        <button className="closebtn" onClick={this.closeNav}>&times;</button>
        <a href="/">HOME</a>
        <a href="/archives">lb. HISTORY</a>
        <a href="/contact">CONTACT</a>
  </div>
  </div>
  </nav>
);
        }}
export default Navbar;
