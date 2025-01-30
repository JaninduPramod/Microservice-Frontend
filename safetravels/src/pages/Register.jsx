import React, { useState } from 'react';
import  './Registrer.css';

function RegistrationPage() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_password: '',
    user_mobile: '',
    user_address: '',
    user_age: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8082/api/v3/newuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: formData.user_name,
          email: formData.user_email,
          password: formData.user_password,
          mobile: formData.user_mobile,
          address: formData.user_address,
          age: formData.user_age

        })
      });

      if (response.ok) {
        alert('Registration successful!');
        setFormData({ user_name: '', user_email: '', user_password: '',user_mobile:'',user_address: '',user_age: '' });
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="registration-container">
      <h2>Create an Account</h2>
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input 
            type="text" 
            id="name" 
            name="user_name" 
            value={formData.user_name} 
            onChange={handleChange} 
            placeholder="Enter your full name"
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="user_email" 
            value={formData.user_email} 
            onChange={handleChange} 
            placeholder="Enter your email"
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            name="user_password" 
            value={formData.user_password} 
            onChange={handleChange} 
            placeholder="Create a password"
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <input 
            type="text" 
            id="mobile" 
            name="user_mobile" 
            value={formData.user_mobile} 
            onChange={handleChange} 
            placeholder="Enter mobile number"
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input 
            type="text" 
            id="address" 
            name="user_address" 
            value={formData.user_address} 
            onChange={handleChange} 
            placeholder="Enter Address"
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input 
            type="number" 
            id="age" 
            name="user_age" 
            value={formData.user_age} 
            onChange={handleChange} 
            placeholder="Enter Age"
            required 
          />
        </div>


        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
}

export default RegistrationPage;
