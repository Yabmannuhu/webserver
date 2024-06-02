import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css';
import React, { StrictMode } from 'react';
import logo from "./logo.png";
import Login from "./login";

function Home2() {
  return (
    
    
  
    <header>
        <div className="navbar-collapse">
          <nav className="navbar navbar-expand-md  navbar-dark bg-dark" role="navigation">
            <div className="container-fliud">
              <img className="mb-3 " src="logo.png" alt="" width="72" />
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" onclick="showpage('home')">Home<span className="badge bg-danger">New</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" onclick="showpage('market')">Marketplace<span className="badge bg-danger">10<sup>+</sup></span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" onclick="showpage('nofication')">Notification<span className="badge bg-danger">10<sup>+</sup></span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" onclick="showpage('message')">Messages<span className="badge bg-danger">10<sup>+</sup></span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" onclick="showpage('setting')">Settings<span className="badge bg-danger">New</span></a>
                  </li>
                </ul>

                <form className="d-flex" role="search">
                  <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                  <button type="search" className="btn btn-success">search</button>
                </form>

              </div>
            </div>
          </nav>
        </div>
      </header>
   
  
    
                           

  );
}


function Home1() {
  return (
    
    
  
    <header className="container themed-container text-center">
      <div className="navbar-collapse">
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark" role="navigation">
          <div className="container">
            <img className="mb-4" src={logo} alt="" width="100" heighteight="80" />
            <p><h1>Welcome to N-Dmarket</h1></p>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
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
                  <a className="nav-link" aria-disabled="false" href=''>Register</a>
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

function Header() {
  return (

    <StrictMode>
      <Home2 />
    <br/><br/><br/>
    </StrictMode>
    
        
  );
}




export default Header;
