import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Import Login.css file



const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle signup logic here
      console.log('Signup submitted:', { username, email, password });
      // You can add your API call or other logic for signup here
    };
  
    return (
      <div className="login-container"> {/* Use login-container class */}
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input 
              type="text" 
              value={username} 
              onChange={handleUsernameChange} 
              placeholder="Enter username" 
              required 
            />
          </label>
          <label>
            Email:
            <input 
              type="email" 
              value={email} 
              onChange={handleEmailChange} 
              placeholder="Enter email" 
              required 
            />
          </label>
          <label>
            Password:
            <input 
              type="password" 
              value={password} 
              onChange={handlePasswordChange} 
              placeholder="Enter password" 
              required 
            />
          </label>
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <Link to="/">Login</Link></p>
      </div>
    );
  };
  
  export default Signup;
  