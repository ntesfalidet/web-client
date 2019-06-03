// System
import React, { Component } from "react";
import PropTypes from "prop-types";

import "./HeaderBar.scss";

class HeaderBar extends Component {
  render() {
    const { avatarURL, fullName, githubURL, topProfile, children } = this.props;

    // TODO: Write a RegEx for filtering out the "http://" in githubURL

    return (
      <div className="app-header-bar-wrapper">
        <nav className="app-header-bar">
          <div className="profile-info-wrapper">
            <img src={avatarURL} />
            <div className="profile-info">
              <div className="profile-name">
                <span>{fullName}</span>
                {topProfile ? (
                  <div className="top-profile">TOP PROFILE</div>
                ) : null}
              </div>
              <a className="github-url" href={githubURL}>
                {githubURL}
              </a>
            </div>
          </div>
          <div className="language-links">{children}</div>
        </nav>
        <div className="app-header-bar-divider" />
      </div>
    );
  }
}

export default HeaderBar;
