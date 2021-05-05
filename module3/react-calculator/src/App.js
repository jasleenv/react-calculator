
import React, { Component } from 'react'
import './App.css';
import Delete from "./Components/Clear"
import Equals from "./Components/Equals"
import Input from "./Components/Input"
import Number from "./Components/Number"
import Operation from "./Components/Operation"
import Results from "./Components/Results"




export default class App extends Component {
  constructor(){
    super()
    this.state = {
      recentlyPressedValue:"",
      recentOperation:"",
      input:0,
      result:"",
      positive: true
    }
  }
calculateResults = () => {}
inputNumber = () => {}
inputOperation = () => {}

  render() {
    return (
      <div classsName='calculator'>
        <section className="results-container">
          <Input digit={this.state.recentlyPressedValue}/>
          <Results result={this.state.result}/>
        </section>
        <section className='numbers-container'>
          <Number value={1}/>
          <Number value={2}/>
          <Number value={3}/>
          <Number value={4}/>
          <Number value={5}/>
          <Number value={6}/>
          <Number value={7}/>
          <Number value={8}/>
          <Number value={9}/>
          <Number value={0}/>
          <Number value='.'/>
        </section>
        <section className='operation-container'>
          <Operation op='x'/>
          <Operation op='%'/>
          <Operation op='+'/>
          <Operation op='-'/>
        </section>
        <section className='eq-container'>
          <Delete/>
          <Equals/>

        </section>
      </div>
    )
  }
}


