import "./App.css";
import logo from "./logo.png";


import React, { useState } from 'react';




function Login() {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: ''
  });

  const [formTouched, setFormTouched] = useState({
    email: false,
    password: false
  });

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === 'email') {
      setFormErrors({
        ...formErrors,
        email: validateEmail(value) ? '' : 'Invalid email address'
      });
    } else if (name === 'password') {
      setFormErrors({
        ...formErrors,
        password: validatePassword(value) ? '' : 'Password must be at least 6 characters'
      });
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setFormTouched({
      ...formTouched,
      [name]: true
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormTouched({
      email: true,
      password: true
    });

    if (validateEmail(formData.email) && validatePassword(formData.password)) {
      // Form is valid, submit the data
      console.log('Form submitted:', formData);
    }
  };



  return (
    <div  className="container themed-container text-center">
    <main className="form-signin w-100 m-auto">
    <form onSubmit={handleSubmit} method="post"  noValidate >
    <img src={logo} className="mb-4"  alt="" width="100" height="100"/>
    <h1 className="h3 mb-3 ">Sign in</h1>
  
    <div className="floating">
      <label for="floatingInput">Email address</label>
      <input
          type="email"
          className={`form-control ${formTouched.email && formErrors.email ? 'is-invalid' : ''}`}
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
       <div className="invalid-feedback">
          {formErrors.email}
        </div>
    </div>
    <div className="floating">
      <label for="floatingPassword">Password</label>
      <input
          type="password"
          className={`form-control ${formTouched.password && formErrors.password ? 'is-invalid' : ''}`}
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
     <div className="invalid-feedback">
          {formErrors.password}
        </div>
      </div>
    <div className="form-check text-start my-3">
      <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label className="form-check-label" for="flexCheckDefault" aria-required>
        Remember me
      </label>
    </div>
    <button className="btn btn-primary w-100 " type="submit">Sign in</button>
  <br/><br/><br/>
  <a href="#forgotten"><button className="btn btn-primary w-100 " onclick="showpage('Forgotten')">Forgotten password</button></a>
  <p>or</p>
  <a href="#createaccount"><button className="btn btn-primary w-100 " onclick="showpage('register')">Sign Up</button>
  </a>
  
  </form>
  </main>
  </div>
  );
}

export default Login;