import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate(); 
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8088/api/auth/login", form);
      localStorage.setItem("token", res.data.token);
      navigate("/home");  // ✅ Correct place to navigate
    } catch (error) {
      alert("Login Failed: " + (error.response?.data || error.message));
    }
  };

  return (
    <div className="form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label>Username</label>
        <input
          type="text"
          placeholder="Enter username"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
