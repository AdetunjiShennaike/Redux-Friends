//import axios to grab server data
import axios from 'axios'

//export actions types
export let FETCH = 'FETCH'
export let SUCCESS = 'SUCCESS'
export let FAIL = 'FAIL'


export const grabData = () => dispatch => {
  dispatch ({ type: FETCH })

  axios.get('http://localhost:5000/friends')
  .then( res => {
    dispatch({ type: SUCCESS, payload: res.data })
  })
  .catch( err => {
    dispatch({ type: FAIL, payload: err })
  })
}