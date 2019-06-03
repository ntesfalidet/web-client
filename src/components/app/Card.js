// System
import React, { Component } from "react";
import ReactDOM from "react-dom";

// Local
import "./Card.scss";
import ListBox from "./ListBox.js";
import ExpertiseListBox from "./ExpertiseListBox.js"
import question_mark_logo from "../../style/images/question-mark.png";

class Card extends Component {
  render() {
    const { title, data } = this.props;
    let ListBoxClass;

    if (title === "EXPERTISE") {
      ListBoxClass = <ExpertiseListBox data = {data}/>
    }

    else {
      ListBoxClass = <ListBox data = {data}/>
    }

    return (
      <div className="outerCard">
            <div className="header-title">
              <img className="questionMarkLogo" src={question_mark_logo}/>
              <span className="titleClass">
                {title}
              </span>
            </div>
            {ListBoxClass}
      </div>
    );
  }
}


export default Card;
