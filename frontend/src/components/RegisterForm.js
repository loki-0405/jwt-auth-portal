import React, { useState } from 'react';
import axios from 'axios';
import './RegisterForm.css'; // External CSS
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
  const [form, setForm] = useState({ username: '', password: '', role: 'USER' });
   const navigate = useNavigate(); 


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8088/api/auth/register", form);
       navigate("/login");  
      
    } catch (error) {
      alert("Registration Failed: " + (error.response?.data || error.message));
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <label>Username</label><br></br>
        <input
          type="text"
          placeholder="Enter username"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          required
        /><br></br>

        <label>Password</label><br></br>
        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        /><br></br>

        <label>Role</label><br></br>
        <select onChange={(e) => setForm({ ...form, role: e.target.value })}>
          <option value="USER">USER</option>
          <option value="ADMIN">ADMIN</option>
        </select><br></br>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;
