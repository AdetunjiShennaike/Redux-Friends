//import axios to grab server data
import axios from 'axios'

import axiosAuth from '../authentication'

//export actions types
export let FETCH = 'FETCH'
export let SUCCESS = 'SUCCESS'
export let FAIL = 'FAIL'


export const grabData = () => dispatch => {
  dispatch ({ type: FETCH })

  axios.get('http://localhost:5000/api/friends')
  .then( res => {
    dispatch({ type: SUCCESS, payload: res.data })
  })
  .catch( err => {
    dispatch({ type: FAIL, payload: err })
  })
}


//login exports
export let LOGIN_START = 'LOGIN_START'
export let LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export let LOGIN_FAIL = 'LOGIN_FAIL'


export const login = () => dispatch => {
  dispatch ({ type: LOGIN_START })

  axios.get('http://localhost:5000/api/login', credentials)
  .then( res => {
    localStorage.setItem('token', res.data.payload)
    dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload })
  })
  .catch( err => {
    dispatch({ type: LOGIN_FAIL, payload: err})
  })
}