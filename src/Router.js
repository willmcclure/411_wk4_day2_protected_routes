import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Home from './components/Home'
import About from './components/About'
import Car from './components/Car'
import Login from './components/Login'
import { Component } from 'react'

// Write checkAuth function here
// Check the cookies for a cookie called "loggedIn"
let checkAuth = () => {
    let loggedIn = cookie.parse(document.cookie)['loggedIn']
    return loggedIn? true: false;
}

// Write ProtectedRoute function here

let ProtectedRoute = ({ component: Component, ...rest}) => {
    return (
        <Route 
        {...rest}
        render={(props) => checkAuth()
            ? <Component {...props} />
            : <Redirect to="login" />}
            />
    )
}


const Router = () => {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute path="/about" component={About} />
            <ProtectedRoute path="/car/:id" component={Car} />
        </Switch>
    );
};

export default Router; 
