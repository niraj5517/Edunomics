import React,{ useState } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './Home';
import App from './App'
import Sessions from './Sessions';
import Login from './Login'


const MyApp = (props) => {

  
  
    return (
  
     <Router>
         <Switch>
        <Route path='/' component={App}  />
        <Route path='/home' component={Home}  />
        <Route path='/sessions' component={Sessions}  />

         </Switch>
     </Router>
    );
  }
  
  export default MyApp;