import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between shadow py-4 px-72">
        <div className="flex justify-between gap-4">
          <div>
            <Link to="home"> Home</Link>
          </div>
          <div>
            <Link to="about"> About</Link>
          </div>
          <div>
            <Link to="/"> Log In</Link>
          </div>
          <div>
            <Link to="signup"> Sign Up</Link>
          </div>
        </div>
        <div className="flex justify-between gap-4">
          <div>
            <Link to="home">Github</Link>
          </div>
          <div>
            <Link to="about">Pricing</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
