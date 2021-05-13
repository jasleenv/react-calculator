import React, { Component } from 'react'

export default class Results extends Component {
    render() {
        //This will display the content from props of the calculations
        
        let {results} = this.props
        // Here, you should try to figure out a way to format the numbers so that they have commas!
        return (
            <div className="results">
                <p>{results}</p>
            </div>
        )
    }
}
