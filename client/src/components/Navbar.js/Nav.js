import React from "react";
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
              <i class="fa fa-cc-jcb fa-2x" aria-hidden="true"></i>
            </a>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav navbar-nav">
              <li className="tr-dropdown">
                <a href="/">Home</a>
              </li>
              <li>
                <a href="job-post.html">Post A Job</a>
              </li>
              <li>
                <a href="listing.html">Job List</a>
              </li>
              <li>
                <a href="job-details.html">Job Details</a>
              </li>
            </ul>
          </div>
          <div className="navbar-right">
            <ul className="sign-in tr-list">
              <li>
                <i className="fa fa-user" />
              </li>
              <li>
                <a href="signin.html">Sign In </a>
              </li>

              <li>
                <a href="signup.html">Register</a>
              </li>
            </ul>

            <a href="job-post.html" className="btn btn-primary">
              Post Job
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
