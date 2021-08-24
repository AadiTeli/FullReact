import { logDOM } from '@testing-library/react';
import React, { Component } from 'react'

export default class App extends Component {
    render() {

        state = {
            users: [
        
                      { id: 1, name: "John Doe" },
                      { id: 2, name: "Victor Wayne" },
                      { id: 3, name: "Jane Doe" },
            ]
        };

                const newUsers = this.state.users.map(user =>
                {
                    
                });
            
    }
    return null;
}
}
