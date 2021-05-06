
import React, { Component } from 'react'
import './App.css';
import KeyPad from "./Components/KeyPad"
import Results from "./Components/Results"



export default class App extends Component {
  constructor() {
    super()

    this.state = {
      results: ""
    }
  }

  calculate = () => {
    try {
      this.setState({
        results: (eval(this.state.results) || "") + ""
      })
    } catch (e) {
      this.setState({
        results: "error"
      })
    }
  }

  reset = () => {
    this.setState({
      results: ""
    })
  }

  backspace = () => {
    this.setState({
      results: this.state.results.slice(0, -1)
    })
  }

  onClick = button => {
    if (button === "=") {
      this.calculate()
    } else if (button === "C") {
      this.reset()
    } else if (button === "CE") {
      this.backspace()
    } else {
      this.setState({
        results: this.state.results + button
      })
    }
  }

  render() {
    return (
      <div>
        <div className='calculator'>
          <Results results={this.state.results} />
          <KeyPad onClick={this.onClick} />
        </div>

      </div>
    )
  }
}


