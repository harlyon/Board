import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Nav = () => {
  return (
    <header className="tr-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="navbar-header">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <i className="fa fa-align-justify" />
              </span>
            </button>
            <a className="navbar-brand" href="index.html">
              <i className="fa fa-cc-jcb fa-2x" aria-hidden="true"></i>
            </a>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav navbar-nav">
              <li className="tr-dropdown">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/jobs">Job List</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-right">
            <ul className="sign-in tr-list">
              <li>
                <i className="fa fa-user" />
              </li>
              <li>
                <a href="/">Sign In </a>
              </li>
              <li>
                <a href="/signin">Register</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
