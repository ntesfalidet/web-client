import React, { Component } from "react"
import PropTypes from "prop-types"
import ClassNames from "classnames"

import "./CallToAction.scss"

class CallToAction extends Component {
  /*
  static propTypes = {
    icon: PropTypes.string,
    url: PropTypes.string,
    className: PropTypes.string,
    primary: PropTypes.bool
  }

  static defaultProps = {
    icon: false,
    url: '#',
    className: "cta",
    primary: true
  }
  */
  
  renderIcon(icon) {
    if (icon) {
      return <object type="image/svg+xml" data={icon} />
    }

    return null
  }

  render() {
    const { icon, url, className, primary, children } = this.props
    const linkName = ClassNames(className + " cta", {
      "primary": primary
    })

    return (
      <a className={linkName} href={url}>
        {this.renderIcon(icon)}
        <span>{children}</span>
      </a>
    )
  }
}

export default CallToAction
