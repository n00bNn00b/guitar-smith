import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="nav-bar">
        <div>
          <h2>Guitar Smith</h2>
        </div>
        <div className="menu-item">
          <Link to="/home">Home</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/about">About Us</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
