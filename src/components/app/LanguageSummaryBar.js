// System
import React, { Component } from "react";
import PropTypes from "prop-types";

// Local
import { ColorMap } from "../../constants"

import "./LanguageSummaryBar.scss";

class LanguageSummaryBar extends Component {
  const languageToLogoMap = {
    Python: "../../../assets/pythonLogo.png"
  };

  renderSummaryContent() {
    const {
      projectCount,
      topExpertise,
      topTechnology,
      syntaxKnowledge,
      codeQuality,
      largestProject
    } = this.props;

    return (
      <div className="language-summary-content">
        <div className="summary-content-separator" />
        <section>
          <h1>PROJECTS</h1>
          <span>{projectCount}</span>
        </section>
        <div className="summary-content-separator" />
        <section>
          <h1>MOST EXPERTISE IN</h1>
          <span>{topExpertise}</span>
        </section>
        <div className="summary-content-separator" />
        <section>
          <h1>TOP TECHNOLOGY</h1>
          <span>{topTechnology}</span>
        </section>
        <div className="summary-content-separator" />
        <section>
          <h1>SYNTAX KNOWLEDGE</h1>
          <span style={{color: ColorMap[syntaxKnowledge]}}>{syntaxKnowledge}</span>
        </section>
        <div className="summary-content-separator" />
        <section>
          <h1>CODE MAINTAINABILITY</h1>
          <span style={{color: ColorMap[codeQuality]}}>{codeQuality}</span>
        </section>
        <div className="summary-content-separator" />
        <section>
          <h1>LARGEST PROJECT</h1>
          {largestProject}
        </section>
      </div>
    )

  }

  render() {
    const { language } = this.props

    return (
      <div className="language-summary-bar">
        <div className="language-logo">
          <img src={languageToLogoMap[language]} />
          <span>{language}</span>
        </div>
        {this.renderSummaryContent()}
      </div>
    );
  }
};
