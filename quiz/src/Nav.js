import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import Home from "./Home";

function Nav() {
  return (
    <div>
      <div>
        <header className="navbar">
        <Link to="/Home">
            <div className="navbar__item">Home</div>
          </Link>
          <Link to="/Contact">
            <div className="navbar__item">Contact</div>
          </Link>
          <Link to="/Feedback">
            <div className="navbar__item">Feedback</div>
          </Link>
        </header>
      </div>
      <div>
        <Home />
      </div>
    </div>
  );
}

export default Nav;
