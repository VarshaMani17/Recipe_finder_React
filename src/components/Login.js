import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const response = await fetch('http://localhost:5000/api/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ username, password }),
    // });

    // if (response.status === 200) {
    //   console.log('User logged in');
    //   setUsername('');
    //   setPassword('');
    //   setError('');
      navigate('/home'); // Navigate to  homepage after login
    // } else {
    //   const data = await response.json();
    //   setError(data.message || 'Error logging in');
    // }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {/* {error && <p className="error">{error}</p>} */}
        <button type="submit">Login</button>
      </form>
      <p className="register-link">
        Don't have an account?{' '}
        <button onClick={() => navigate('/register')} className="link-button">Register</button>
      </p>
    </div>
  );
};

export default Login;
