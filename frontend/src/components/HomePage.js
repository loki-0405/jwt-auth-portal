// src/pages/HomePage.js
import React from 'react';
import './HomePage.css'; 


const HomePage = () => {
  const username = localStorage.getItem('username');
   
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-title">👋 Welcome, {username || 'Guest'}!</h1>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </header>

      <section className="section about">
        <h2>About Me</h2>
        <p>
          I'm a passionate full-stack developer with experience in building web applications using
          React.js, Spring Boot, and MySQL. I love solving problems and creating meaningful user experiences.
        </p>
      </section>

      <section className="section projects">
        <h2>My Projects</h2>
        <ul>
          <li>
            <h3>Student Management System</h3>
            <p>A Spring Boot + React-based CRUD app for managing student data.</p>
          </li>
          <li>
            <h3>To-Do List App</h3>
            <p>Simple React-based task manager with JWT-secured API.</p>
          </li>
          <li>
            <h3>E-commerce Site</h3>
            <p>Spring Boot backend with cart, order, and payment functionality.</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
