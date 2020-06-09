import React,{ useState } from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import Home from './Home';
import App from './App'
import Sessions from './Sessions';
import Login from './Login'


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      window.localStorage.getItem('username')
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )


const MyApp = (props) => {

  
  
    return (
  
     <Router>
         <Switch>
        <Route path='/login' component={Login}  />
        <PrivateRoute path='/' component={App} />
        {/* <Route path='/home' component={Home}  />
        <Route path='/sessions' component={Sessions}  /> */}

         </Switch>

         <Redirect path='/' to='/home'/>
     </Router>
    );
  }
  
  export default MyApp;