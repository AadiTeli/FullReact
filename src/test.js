import React, { Component } from 'react'
import ReactDOM from 'react-dom'




class Mycomp extends Component{
    render()
    {
        return <h1>
            Hello World;
        </h1>
    }
}

ReactDOM.render(<Mycomp />,document.getElementById("root") )