// System
import React, { Component } from "react";
import ReactDOM from "react-dom";

// Local
import "./ListBox.scss";
import arrow_logo from "../../style/images/arrow.png";
import link_logo from "../../style/images/link.png";
import {ColorMap} from "../../constants";

class Link extends Component {
  render() {
    const { data, style } = this.props;

    return(
      <span>
        <span className="urlClass">
          <a href={data.url}>
            <img src={link_logo} style={style}/>
          </a>
        </span>

        {
          data.name
        }

      </span>
    )
  }
}

class ListBox extends Component {

  constructor(props) {
    super(props)

    this.state = {
      selected: {}
    }
  }

  handleClick(e) {
    const selected = this.state.selected;
    selected[e] = !selected[e];
    this.setState({selected: selected});
  }

  renderStrip(item, style) {

      const colorStyle = {};

      if (typeof item.value === 'string' || item.value instanceof String || Number.isInteger(item.value)) {

        /*////////// METHOD FOR MAPPING CERTAIN COLORS TO CERTAIN KEY WORDS //////////////////////////////*/

        if (Number.isInteger(item.value)) {
          if (!item.children)
          colorStyle["color"] = ColorMap.expert;
        }

        if (item.value === "Novice" || item.value === "Beginner" || item.value === "Low") {
          colorStyle["color"] = ColorMap.low;
        }

        if (item.value === "Intermediate" || item.value === "Medium") {
          colorStyle["color"] = ColorMap.medium;
        }

        if (item.value === "Advanced" || item.value === "Expert" || item.value === "High") {
          colorStyle["color"] = ColorMap.high;
        }

        /*/////////////////////////////////////////////////////////////////////////////////////////////// */

        return <div className="innerStrip">
          <div>{item.name}</div>

          <div>
            <span style = {colorStyle}>
              {item.value.toLocaleString()}
            </span>

            {item.children ?
              <span className="arrow" onClick={() => this.handleClick(item.name)}>
                {this.state.selected[item.name] ?
                  <img className="arrowLogo1" src={arrow_logo}/> :
                  <img className="arrowLogo2" src={arrow_logo}/>
                }
              </span> : null
            }
          </div>
        </div>
      }

      else {
        return <div className="innerStrip">
          <div>{item.name}</div>

          <div>
            <Link data={item.value} style={style}/>

            {item.children ?
              <span className="arrow" onClick={() => this.handleClick(item.name)}>
                {this.state.selected[item.name] ?
                  <img className="arrowLogo1" src={arrow_logo}/> :
                  <img className="arrowLogo2" src={arrow_logo}/>
                }
              </span> : null
            }
          </div>
        </div>

      }
  }


  renderStripChildren(children, style) {
    if (children) {
      let flag = false; // GET BACK TO THIS
      return (
          <div className="ChildrenGroup">
            {
              children.map((child) => {

                const colorStyle = {};

                if (typeof child.value === 'string' || child.value instanceof String) {

                  let lastIndex = child.value.lastIndexOf("%");
                  if (child.value.substring(lastIndex,lastIndex + 1) === '%') {

                    flag = true; // GET BACK TO THIS

                    let stringValue = child.value.substring(0, lastIndex);
                    let integerValue = parseInt(stringValue);

                    if (integerValue > 0 && integerValue <= 33) {
                      colorStyle["color"] = ColorMap.low;
                    }

                    if (integerValue > 33 && integerValue <= 66) {
                      colorStyle["color"] = ColorMap.medium;
                    }

                    if (integerValue > 66 && integerValue <= 100) {
                      colorStyle["color"] = ColorMap.high;
                    }
                  }

                  if (child.value === "Novice" || child.value === "Beginner" || child.value === "Low") {
                    colorStyle["color"] = ColorMap.low;
                  }

                  if (child.value === "Intermediate" || child.value === "Medium") {
                    colorStyle["color"] = ColorMap.medium;
                  }

                  if (child.value === "Advanced" || child.value === "Expert" || child.value === "High") {
                    colorStyle["color"] = ColorMap.high;
                  }

                  return <div className="innerChildrenStrip">
                    <div>
                      {child.name}
                    </div>
                    <div>
                      <span style = {colorStyle}>
                        {child.value}
                      </span>
                    </div>
                  </div>
                }

                else {
                  if (Number.isInteger(child.value)) {
                    return <div className="innerChildrenStrip">
                      <div>
                        {child.name}
                      </div>
                      <div>
                        <span>
                          {child.value.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  }

                  else {
                    return <div className="innerChildrenStrip">
                      <div>{child.name}</div>
                      <Link data={child.value} style={style}/>
                    </div>
                  }
                }

              })
            }

            {/* GET BACK TO THIS */}
            {flag &&
            <div className="percentilesClass">
                Percentiles represent how you compare to thousands of other Github
          users. A score above 50% means you’re above average. <a>Download raw
          data.</a>
            </div>
            }

         </div>
      )
    }

    return null
  }

  render() {
    const { data } = this.props;
    const style1 = {
      height: 15
    }

    const style2 = {
      height: 11
    }

    return (
      <div className="outerListBox">
            {data.map(item => (
                <div className="innerListBox">
                  {this.renderStrip(item, style1)}
                  {this.state.selected[item.name] ? this.renderStripChildren(item.children, style2) : null}
                </div>
            ))}
      </div>
    );
  }
}


export default ListBox;
