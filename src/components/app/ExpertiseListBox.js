// System
import React, { Component } from "react";
import ReactDOM from "react-dom";

// Local
import "./ExpertiseListBox.scss";
import {ColorArray} from "../../constants";


class ExpertiseListBox extends Component {


    renderStrip(item, num, index) {

      let relWidth = Math.floor(355*((parseInt(item.value.substring(0, item.value.lastIndexOf("%")))) / num));
      const widthStyle = {};
      widthStyle["width"] = relWidth;

      let colorBar = ColorArray[index % ColorArray.length];
      const colorStyle = {};
      colorStyle["background-color"] = colorBar;

      return <div className="innerStrip1">
        <div>{item.name}</div>

        <div className="dataStrip">
          <div className="progressBarOutline" style={widthStyle}>
            <div className="progressBar" style={colorStyle}></div>
          </div>
          <span className="progressBarData">
            {item.value}
          </span>
        </div>
      </div>
    }

    render() {
      const { data } = this.props;

      let prevNum = 0;
      data.forEach((item) => {
        let num = parseInt(item.value.substring(0, item.value.lastIndexOf("%")))
        if (num > prevNum) {
          prevNum = num;
        }
      })

      return(
        <div className="outerListBox1">
          {data.map((item, index) => (
              <div>
                {this.renderStrip(item, prevNum, index)}
              </div>
          ))}
        </div>
      );
    }
}






export default ExpertiseListBox;
