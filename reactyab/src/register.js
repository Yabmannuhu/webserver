
import './App.css';
import logo from "./logo.png";
import React, { useState, useEffect }  from 'react';
import axios from 'axios';




   
function Register() {

  const [formData, setFormData] = useState({
    name:'',
    dob :'',
    gender :'', 
    zip : '',
    state:'',
    town :'' , 
    address: '',
   phone :'',
    email : '',
    password:'',
    country:'',
    verify:''
  });

  const [formErrors, setFormErrors] = useState({
    name:'',
    dob :'',
    gender :'', 
    zip : '',
    state:'',
    town :'' , 
    address: '',
   phone :'',
    email : '',
    password:'',
    country:''
  });

  const [formTouched, setFormTouched] = useState({
    name:false,
    dob :false,
    gender :false, 
    zip : false,
    state:false,
    town :false, 
    address: false,
   phone :false,
    email :false,
    password:false,
    country:false,
    verify:true
    
  });

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const validatePhone = (phone) => {
    return phone.length >= 11;
  };

  const validatezip = (zip) => {
    return zip.length >= 6;
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
    }      else if (name === 'name') {
      setFormErrors({
        ...formErrors,
        name: value ? '' : 'Your name is required'
      });
    }      else if (name === 'state') {
      setFormErrors({
        ...formErrors,
      state: value ? '' : ' State is required'
      });
    }     else if (name === 'dob') {
      setFormErrors({
        ...formErrors,
        dob: value ? '' : 'Invalid Date of Birth'
      });
    }     else if (name === 'country') {
      setFormErrors({
        ...formErrors,
        country: value ? '' : 'Your country is required'
      });
    }     else if (name === 'zip') {
      setFormErrors({
        ...formErrors,
        zip: validatezip(value) ? '' : 'Invalid Zip code'
      });
    }     else if (name === 'address') {
      setFormErrors({
        ...formErrors,
        address:value ? '' : 'Please input the correct home address'
      });
    }     else if (name === 'phone') {
      setFormErrors({
        ...formErrors,
        phone: validatePhone(value) ? '' : 'Invalid Phone number'
      });
    }     else if (name === 'gender') {
      setFormErrors({
        ...formErrors,
        gender: value ? '' : 'choose the right option'
      });
    }     else if (name === 'town') {
      setFormErrors({
        ...formErrors,
        town:value ? '' : ' Town Required'
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
      name:true,
      dob :true,
      gender :true, 
      country : true,
      state:true,
      town :true, 
      address: true,
     phone :true,
      email :true,
      password:true,
      zip:true,
      verify:true
    });

    if (validateEmail(formData.email) && validatePassword(formData.password) && (formData.state) && (formData.address) && validatePhone(formData.phone) && validatezip(formData.zip) && (formData.country) && (formData.gender) && (formData.town) && (formData.name) && (formData.dob )) {
      // Form is valid, submit the data
        axios.post('http://localhost:8000/submit-form/', formData)
          .then(response => {
            console.log('Form submitted successfully:', response.data);
          })
          .catch(error => {
            console.error('There was an error submitting the form:', error);
          })
    }
  };

   
    

 
  return (
    
 <div className="" id="register" >
<img src={logo} className="mb-3 " alt="" width="72"/>
<h1>Please fill in the details correctly before you submit</h1>
<form  onSubmit={handleSubmit}   method="post" novalidate >

<div className="">

<div className="col-sm-6">

<label htmlFor="name" className="form-label">Name:</label>
<input type="text"  className={`form-control ${formTouched.name && formErrors.name ? 'is-invalid' : ''}`} id="name" placeholder="Name" name="name"
value={formData.name}
onChange={handleChange}
onBlur={handleBlur}
required/>
<div className="invalid-feedback">
{formErrors.name}
</div>
</div>
  
  <div className="col-md-2">
    <label htmlFor="gender" className="form-label">Sex:</label>
    <select  className={`form-select ${formTouched.gender && formErrors.gender ? 'is-invalid' : ''}`} id="gender" name="gender"
    value={formData.gender}
    onChange={handleChange}
    onBlur={handleBlur}
    required>
      <option value=''>choose here...</option>
      <option value="male">Male</option>
      <option value="Female">Female</option>
    </select>
    <div className="invalid-feedback">
    {formErrors.gender}
    </div>
  </div>
   <div className="col-md-4">
  <label htmlFor="dob" className="form-label"> Date of birth:</label>
  <input  className={`form-control ${formTouched.dob && formErrors.dob ? 'is-invalid' : ''}`} type="date" id="dateofbirth" name="dob" placeholder="Date of Birth"
  value={formData.dob}
  onChange={handleChange}
  onBlur={handleBlur}
  required/>
  <div className="invalid-feedback">
  {formErrors.dob}
  </div>
  </div>
</div>
<div className="col-md-6">
    <label htmlFor="country" className="form-label">Country:</label>
    <input  className={`form-control ${formTouched.country && formErrors.country ? 'is-invalid' : ''}`} type="text" id="country" name="country" placeholder="Country" 
    value={formData.country}
    onChange={handleChange}
    onBlur={handleBlur}
    required/>
    <div className="invalid-feedback">
    {formErrors.country}
    </div>
  </div>

  <div className="col-md-6">
    <label htmlFor="state" className="form-label">State:</label>
    <input  className={`form-control ${formTouched.state && formErrors.state ? 'is-invalid' : ''}`} type="text" id="state" name="state" placeholder="State" 
    value={formData.state}
    onChange={handleChange}
    onBlur={handleBlur}
    required/>
    <div className="invalid-feedback">
    {formErrors.state}
    </div>
  </div>      
  
  <div className="col-md-6">
    <label htmlFor="town" className="form-label">Town:</label>
    <input  className={`form-control ${formTouched.town && formErrors.town ? 'is-invalid' : ''}`} type="text" id="town" name="town" placeholder="Town"
    value={formData.town}
    onChange={handleChange}
    onBlur={handleBlur}
    required/>
    <div className="invalid-feedback">
    {formErrors.town}
    </div>
  </div>  

  <div className="col-sm-6">
    <label htmlFor="address" className="form-label">Address:</label>
    <input  className={`form-control ${formTouched.address && formErrors.address ? 'is-invalid' : ''}`} type="address" id="address" name="address" placeholder="Home address"
    value={formData.address}
    onChange={handleChange}
    onBlur={handleBlur}
    required/>
    <div className="invalid-feedback">
    {formErrors.address}
    </div>
  </div>  
  <div className="col-md-6">
    <label htmlFor="phone" className="form-label">Phone number:</label>
    <input  className={`form-control ${formTouched.phone && formErrors.phone ? 'is-invalid' : ''}`} type="tel" id="phone" name="phone" placeholder="Phone No" 
     value={formData.phone}
     onChange={handleChange}
     onBlur={handleBlur}
    required/>
    <div className="invalid-feedback">
    {formErrors.phone}
    </div>
  </div>
    
  <div className="col-sm-6">

  <label htmlFor="email" className="form-label">E-mail address:</label>
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

  <div className="col-md-6">
<label htmlFor="password" className="form-label" >Password:</label>
<input       
    className={`form-control ${formTouched.password && formErrors.password ? 'is-invalid' : ''}`}
 type="password" id="password" name="password" placeholder="Password"
 />
<div className="invalid-feedback">
{formErrors.password}
</div>
</div> 

<div className="col-md-6">
<label htmlFor="password" className="form-label">Confirm password:</label>
<input className={`form-control ${formTouched.password && formErrors.password ? 'is-invalid' : ''}`}
 type="password" id="cpassword" name="password" placeholder="Confirm password"
 value={formData.password}
 onChange={handleChange}
 onBlur={handleBlur}
 required/>
<div className="invalid-feedback">
{formErrors.password}
</div>
</div>
<div className="col-md-3">
<label htmlFor="zip" className="form-label">Zip code:</label>
<input type="text" className={`form-control ${formTouched.zip && formErrors.zip ? 'is-invalid' : ''}`} id="zip" name='zip' placeholder=""
 value={formData.zip}
 onChange={handleChange}
 onBlur={handleBlur}
required/>
<div className="invalid-feedback">
{formErrors.zip}
</div>
</div>
<div className="form-check">
<input type="checkbox" className="form-check-input" name="save" id="save-info" required/>
<label className="form-check-label" htmlFor="save-info">I agree with the all <a href="#">terms&privacy</a></label>
<div className="invalid-feedback">
{formErrors.save}
</div>
</div>
<input type="hidden" id="entryId" name="verify"
 value={formData.verify}
 onChange={handleChange}
 onBlur={handleBlur}
/>
  <br/><br/><br/>
  <button className="btn btn-primary w-50 btn btn-success" type="submit">Register</button>
  </form>
<div className="my-3">
<p>have an account <a href="">login</a></p>
</div>
</div>

);
}

function Verify(){

   
    const [formData, setFormData] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:8000/form-v/')
        .then(response => {
          setFormData(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the form data!', error);
        });
        
    }, []);

  return(
    <form method='post'>
<div id="content" className="mt-4 p-5  text-dark rounded">
  <label htmlFor="verification" >How will you receive your verification code?</label>
  {formData.map(data => (
  <><div className="form-check">
      <input id="phonenumber" name="phone" type="radio" className="form-check-input" checked required />
      <label className="form-check-label" htmlFor="phone">{data.phone}</label>
    </div><div className="form-check">
        <input id="email" name="email" type="radio" className="form-check-input" required />
        <label className="form-check-label" htmlFor="email">{data.email}</label>
      </div></>
          ))}
          <div>
          
              <h3>A code will be send to this <span id="verify"></span></h3>
              <label htmlFor="code">Please input the 6-digit you receive</label>
              <input className="form-control" type="number" name="code" maxlength="6" minlength="6"/>
              <button  className="btn btn-success">Submit</button>
              <p>Didn't get a code <button type="reset" className="btn btn-danger btn btn-default btn-sm">Resend</button> Code</p>
       </div>
 </div>
 
</form>
                           

  );
}


export default Register;


 
  
     

          
            







  
