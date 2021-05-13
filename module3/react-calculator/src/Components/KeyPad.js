import React, { Component } from 'react'

// Since this component doesn't use state or lifecycle methods other than render,
// use a functional component instead!
export default class KeyPad extends Component {
    render() {
        // Is there a way you could avoid writing out all of your buttons individually?
        // One way: create an array like buttonNames = ['(', 'CE', '1', ...]
        // Then use .map() to create all of the jsx elements.
        
        // This will make your code easier to maintain, because if you need to make a change to your onClick,
        // you can change it once inside the .map callback instead of changing it on every single button individually.
        return (
            <div className="button">
            <button name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
            <button name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
            <button name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
            {/* Insead of using <br/> tags, you should use CSS to control the appearance/layout of your buttons! */}
            <button name="AC" onClick={e => this.props.onClick(e.target.name)}>AC</button><br/>


            <button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
            <button name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
            <button name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
            <button name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>


            <button name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
            <button name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
            <button name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
            <button name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>

            <button name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
            <button name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
            <button name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
            <button name="*" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>


            <button name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
            <button name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
            <button name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
            <button name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/>
        </div>
    );
}
}
