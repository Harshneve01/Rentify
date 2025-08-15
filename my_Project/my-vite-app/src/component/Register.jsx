import React from 'react';
import './Register.css';

function Register() {
  return (
    <div className="register-container">
      <h2>Create Your Account</h2>

      <form>
        <div className="input-group">
          <i className="fas fa-user"></i>
          <input type="text" placeholder="Full Name" required />
        </div>

        <div className="input-group">
          <i className="fas fa-envelope"></i>
          <input type="email" placeholder="Email" required />
        </div>

        <div className="input-group">
          <i className="fas fa-lock"></i>
          <input type="password" placeholder="Password" required />
        </div>

        <button type="submit">Register</button>
      </form>

      <p className="login-link">
        Already have an account? <a href="#">Login</a>
      </p>
    </div>
  );
}

export default Register;
