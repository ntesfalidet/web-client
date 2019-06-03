import React, { Component } from "react"

class InputBar extends Component {
  constructor() {
    super()
    this.state = {username: ''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({username: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Enter your Github username"/>
    )
  }
}

export default InputBar
