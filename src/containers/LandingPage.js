// System
import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

// Local
import HeaderBar from "../components/landing/HeaderBar";
import Title from "../components/landing/Title";
import CallToAction from "../components/landing/CallToAction";

import "./LandingPage.scss";

class Landing extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Fragment>
        <HeaderBar />
        <section className="title-wrapper">
          <div className="title">
            <h1>
              Analyze your<br />Github profile
            </h1>
            <h2>
              Gain instant insight into your code quality, tech stack, and
              productivity.
            </h2>
            <CallToAction
              className="github-signin"
              icon="../../assets/vectors/github.svg"
              url=""
              primary={true}
            >
              Try it with <em>Github</em>
            </CallToAction>
            <CallToAction className="learn-more" url="" primary={false}>
              Learn More
            </CallToAction>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Landing;
