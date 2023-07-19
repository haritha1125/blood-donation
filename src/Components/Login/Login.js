import React, { useState } from 'react';
import './Login.css';
import {Link} from "react-router-dom"

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

 
  return (
 
    <div className="container">
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        
         <p>Dont have an account?<button ><Link className='route-link-login' to="/register">Register</Link></button></p>
        </form>
      </div>
    </div>
    
  );
};

export default Login;
