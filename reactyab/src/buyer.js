import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css';
import React from 'react';
import logo from "./logo.png";

function Home() {
  return (
    
    
  
    <header  className="container themed-container text-center">  
      <div className="navbar-collapse">
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark" role="navigation" >
        <div className="container">
            <img className="mb-4" src={logo} alt="" width="100" heighteight="80"/>
         <p><h1>Welcome to N-Dmarket</h1></p>
          <button className="navbar-toggler" type="button" data-toggle="collapse"  data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
    
          <div className="collapse navbar-collapse" id="navbarsExample01">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="login.html">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="false" href="createaccount.html">Register</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Explore</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">F&Qs</a></li>
                  <li><a className="dropdown-item" href="#">About</a></li>
                  <li><a className="dropdown-item" href="#">Services</a></li>
                  <li><a className="dropdown-item" href="#">Contact Us</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    </header>
    
   
  
    
                           

  );
}


export default Home;
