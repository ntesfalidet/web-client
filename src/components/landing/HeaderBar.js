import React, { Component } from "react";

import "./HeaderBar.scss";

class HeaderBar extends Component {
  render() {
    return (
      <nav className="navbar-wrapper">
        <div className="navbar">
          <a href="http://dashersoftware.com/">
            <object
              type="image/svg+xml"
              data="../../assets/vectors/logo.svg"
              className="header-logo"
            />
          </a>
          <div className="navbar-links">
            <a className="navbar-navlinks" href="#">
              How it Works
            </a>
            <a className="navbar-navlinks" href="#">
              Contact
            </a>
            <a href="http://dashersoftware.com/" className="for-recruiters">
              For Recruiters
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default HeaderBar;
