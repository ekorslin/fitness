import React, { Component } from 'react';
import './archives.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
              <div class="carousel-item active">
              <img class="d-block w-100" src="blackii.jpg" alt="First slide"/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Welcome to the Film Archives</h5>
                  <button type="button" className="btn btn-outline-light">L  I  B  R  A  R  Y</button>
                </div>
              </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="lights.jpg" alt="Second slide"/>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="lights.jpg" alt="Third slide"/>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>  
        <img id="thirty" src="thirty.jpg" alt="First slide"/>
      </div>
    );
  }
}

export default Home;
