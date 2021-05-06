import React, { Component } from 'react'

export default class Results extends Component {
    render() {
        //This will display the content from props of the calculations
        
        let {results} = this.props
        return (
            <div className="results">
                <p>{results}</p>
            </div>
        )
    }
}
