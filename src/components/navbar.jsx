import React from 'react';
import './Navbar.css'; // For styling

<nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'navy', width: '100%' }}>
  <div  className="w-100 d-flex justify-content-between align-items-center px-3">
    <a className="navbar-brand" href="#">CrowdFundify</a>
    <div className="d-flex">
      <a className="nav-link text-white me-3" href="#home">Home</a>
      <a className="nav-link text-white me-3" href="#about">About</a>
      <a className="nav-link text-white me-3" href="#projects">Projects</a>
      <a className="nav-link text-white" href="#contact">Contact</a>
    </div>
  </div>
</nav>



export default Navbar;
