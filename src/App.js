import React, { Component } from 'react'

export default class App extends Component {

    state={
        value: "Hello this is textarea what we are learning today!!"
    }
    HandleChange = e =>
    {
        this.setState({value:e.target.value})
    }

    render() {
        return (
            <div>
                <textarea value={this.state.value} onChange={this.HandleChange} />
                </div>
        )
    }
}
