// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css'; // Ensure the path is correct based on your file structure


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Wrap the logo in a Link component to navigate to the home page */}
        <Link to="/" className="navbar-logo">
          <img src="/KALIKHA.png" alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/seller-center">Seller Center</Link>
        <Link to="/my-orders">My Orders</Link>
        <Link to="/my-profile">My Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
