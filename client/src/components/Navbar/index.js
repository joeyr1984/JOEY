import React from "react";
import { Link } from "react-router-dom";
import "./style.css";



function Navbar() {
  return (
    <nav className="navbar">
      <h1>JOEY</h1>
      <div>
        <Link className="link" to="/">home</Link>
        <Link className="link" to="/work">work</Link>
        <Link className="link" to="/about">about</Link>
        <Link className="link" to="/contact">contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
