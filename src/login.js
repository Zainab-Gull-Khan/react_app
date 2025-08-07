import React, { useState } from "react";
import "./App.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:3000/login', { email, password })
    .then(res => console.log(res))
    .catch(err =>console.log(err));
  }

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <h5>Email (Username)</h5>
        <input 
          type="email" 
          placeholder="Email"  
          onChange={e => setEmail(e.target.value)} 
          required 
        />
        <h5>Password</h5>
        <input 
          type="password" 
          placeholder="Password"  
          onChange={e => setPassword(e.target.value)} 
          required 
        />
        <br />
        <br />
        <button type="submit">Login</button>
        <p>Don't have an account? <Link to="/signup">Signup</Link></p>
      </form>
    </div>
  );
}

export default Login;
