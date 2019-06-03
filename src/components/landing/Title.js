import React, { Component } from "react"
import CallToAction from "./CallToAction"
import InputBar from "./InputBar"

import "./Title.scss"

class Title extends Component {
  render() {
    return (
      <section className="title-wrapper">
        <div className="title">
          <h1>Analyze your<br />Github profile</h1>
          <h2>Gain instant insight into your code quality, tech stack, and
            productivity.</h2>
          <CallToAction
            className="github-signin"
            icon="../../assets/vectors/github.svg"
            url=""
            primary={true}>
              Try it with <em>Github</em>
          </CallToAction>
          <CallToAction
            className="learn-more"
            url=""
            primary={false}>
              Learn More
          </CallToAction>
        </div>
      </section>
    )
  }
}

export default Title
