//import the action names 
import { SUCCESS, FAIL, FETCH } from '../actions'

const initialState = {
  friends: [],
  fetching: false,
  error: ''
}

export const reducerFriend = (state = initialState, action) => {
  switch (action.type) {
    case FETCH: 
      return {
        ...state,
        fetching: true,
        error: ''
      }
    case SUCCESS:
      return {
        ...state,
        fetching: false,
        error: '',
        friends: action.payload
      }
    case FAIL:
    default: 
      return state
  }
}