import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./header";
import Register from "./register";
import Footer from "./footer";
import Login from './login';
import reportWebVitals from './reportWebVitals';

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='carousel slide text-center container themed-container text-center'>
    <Header/>
  <Register/>
  <Login/>
    <Footer/>
   </div>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
