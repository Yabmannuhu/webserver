
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css';
import Register from "./register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
function Home() {
  return (
    
    <><br /><div id="myCarousel" className="carousel slide text-center container themed-container text-center" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active" role="listbox">
            <img src="Market.webp" className="d-block w-100" alt="Image 1" />
            <h1>Welcome to N-Dmarket</h1>
            <p>A Site where you can Buy and Sell your Goods and Services</p>
            <a href="#" className="btn btn-success ">Learn More</a>
          </div>
          <div className="carousel-item">
            <img src="image2.jpg" className="d-block w-100" alt="Image 2" />
          </div>
          <div className="carousel-item">
            <img src="image3.jpg" className="d-block w-100" alt="Image 3" />
          </div>
        </div>
        <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div><section className="container themed-container text-center">
        <div id="about" className="container-fluid">
          <div className="row">
            <div className="col-sm-8">
              <h2>About Us</h2><br />
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <br /><button className="btn btn-default btn-lg">Get in Touch</button>
            </div>
            <div className="col-sm-4">
              <span className="glyphicon glyphicon-signal logo"></span>
            </div>
          </div>
        </div>
      </section><section class="container themed-container text-center">

        <div class="container-fluid bg-grey">
          <div class="row">
            <div class="col-sm-4">
              <span class="glyphicon glyphicon-globe logo slideanim"></span>
            </div>
            <div class="col-sm-8">
              <h2>our services</h2><br />
              <h4><strong>MAIN:</strong> Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br/>
                <p><strong>VISION:</strong> Our vision Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
          </div>
        </div>
      </section><br /><br /><br /><h2>What people say about our services</h2><div id="myCarousel" className="carousel slide text-center container themed-container text-center" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active" role="listbox">
            <img src="Market.webp" className="d-block w-100" alt="Image 1" />
            <h1>Welcome to N-Dmarket</h1>
            <p>A Site where you can Buy and Sell your Goods and Services</p>
            <a href="#" className="btn btn-success ">Learn More</a>
          </div>
          <div className="carousel-item">
            <img src="image2.jpg" className="d-block w-100" alt="Image 2" />
          </div>
          <div className="carousel-item">
            <img src="image3.jpg" className="d-block w-100" alt="Image 3" />
          </div>
        </div>
        <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <h2>Frequently Ask Questions</h2>
<div className="accordion" id="accordionExample">
<div className="accordion-item">
  <h4 className="accordion-header">
    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Question #1
    </button>
  </h4>
  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
    <div className="accordion-body">
      Answer of the Question
    </div>
  </div>
</div>
<div className="accordion-item">
  <h4 className="accordion-header">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Question #2
    </button>
  </h4>
  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <div className="accordion-body">
      Answer of the Question
    </div>
  </div>
</div>
<div className="accordion-item">
  <h4 className="accordion-header">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Question #3
    </button>
  </h4>
  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordion">
    <div className="accordion-body">
      Answer of the Question
    </div>
  </div>
</div>

      <div id="pricing" class="container-fluid">

        <div class="row slideanim">

        </div>
        </div></div></>

        );
        }

        
        export default Home;




      