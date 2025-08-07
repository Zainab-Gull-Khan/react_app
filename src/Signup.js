import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';

function SignUp() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:3000/signup', { firstname,lastname,email, password })
    .then(res => console.log(res))
    .catch(err =>console.log(err));
  }

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <h5>First Name</h5>
        <input 
          type="text" 
          name="firstName"
          placeholder="First Name" 
          onChange={e =>setFirstname(e.target.value)} 
          required 
        />
        <h5>Last Name</h5>
        <input 
          type="text" 
          name="lastName"
          placeholder="Last Name" 
           onChange={e =>setLastname(e.target.value)} 
          required 
        />
        <h5>Email</h5>
        <input 
          type="email" 
          name="email"
          placeholder="Email" 
           onChange={e =>setEmail(e.target.value)} 
          required 
        />
        <h5>Password</h5>
        <input 
          type="password" 
          name="password"
          placeholder="Password" 
           onChange={e =>setPassword(e.target.value)} 
          required 
          minLength="6"
        />
        <h5>Confirm Password</h5>
        <input 
          type="password" 
          name="confirmPassword"
          placeholder="Confirm password" 
          onChange={e =>setPassword(e.target.value)} 
          required 
          minLength="6"
        />
        <br />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Creating Account...' : 'Create Account'}
        </button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
}

export default SignUp;
