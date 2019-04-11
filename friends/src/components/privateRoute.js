import React from 'react'

//import routing
import { Route, Redirect } from 'react-router-dom'

//import react connecter
import { connect } from 'react-redux'


let PrivateRoute = ({ component: Component, errorStatusCode, ...rest }) => {
  return(
    <Route {...rest} render={ props => {
      if (localStorage.getItem('token') && errorStatusCode != 403) {
        //send to the home page
        return <Component {...props} />
      }
      else {
        //redirect to try to login again
        return <Redirect to='/login' />
      }
    }}
  )
}




const mapStateToProps = state => {
  return { 
    errorStatusCode: state.errorStatusCode
  }
}

export default connect( mapStateToProps, {} )(PrivateRoute)