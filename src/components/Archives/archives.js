import React, { Component } from 'react';
import './archives.css';

class Home extends Component {
  render() {
    return (
      <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Body Part Focus
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="www.bulls.com">Action</a>
        <a className="dropdown-item" href="www.packers.com">Another action</a>
        <a className="dropdown-item" href="www.cubs.com">Something else here</a>
      </div>
    </div>
    );
  }
}

export default Home;
