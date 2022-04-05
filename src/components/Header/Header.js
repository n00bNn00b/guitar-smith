import React from "react";
import About from "../About/About";
import Blogs from "../Blogs/Blogs";
import Dashboard from "../Dashboard/Dashboard";
import Home from "../Home/Home";
import Reviews from "../Reviews/Reviews";

const Header = () => {
  return (
    <div>
      <h2>Header working or not?</h2>
      <Home />
      <Reviews />
      <Dashboard />
      <Blogs />
      <About />
    </div>
  );
};

export default Header;
