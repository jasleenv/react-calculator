
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
      // What happens if I try to enter 0 + 0?
      // The || operator here means I can never see a 0 on your display!
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
    } else if (button === "AC") {
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
          <h1>Simple React Calculator</h1>
          <p>CE=Back Space
            AC= All Clear
            Can Use +/- Integers
          </p>
          
        <Results results={this.state.results} />
          <KeyPad onClick={this.onClick} />
        </div>

      </div>
    )
  }
}


