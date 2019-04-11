import React from 'react';
import './App.css';

//import components 
import loginPage from './view/loginPage'
import friendPage from './view/friendPage'

//import routers
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import PrivateRoute from './components/privateRoute'

let App = () =>  {
  return (
    <Router> 
      <div classname='container'>
        <nav>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/friendslist'>Home</NavLink>
        </nav>

        <Route path='/login' component={loginPage}/>
        <PrivateRoute exact path='/friendslist' component={friendPage}/>
      </div>
    </Router>
  )
  
}

export default App;
