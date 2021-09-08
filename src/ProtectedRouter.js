import React from 'react'
import { Redirect, Route } from 'react-router'

export const ProtectedRouter = ({ component: Component, ...rest }) => {

    const token = localStorage.getItem("token")
    
    return (
        <div>
            <Route {...rest} render={props => (
                token ?
                    <Component {...props} />
                    : <Redirect to="/login" />
            )} />
            );

        </div>
    )
}
