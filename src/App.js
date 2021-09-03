import React, { Component } from 'react'
import Data from './3 sep login'
import Home from './Components/Home';
import Router from './Router'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router />
            </div>
        )
    }
}
