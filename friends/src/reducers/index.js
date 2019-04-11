//import the action names 
import { SUCCESS, FAIL, FETCH, LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS } from '../actions'
import { start } from 'repl';

const initialState = {
  friends: [],
  fetching: false,
  loggingIn: false,
  deletingFriend: false,
  fetchingFriends: false,
  savingFriends: false,
  updatingFriend: false,
  error: null
}

export const reducerFriend = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: '',
        fetching: false,
        loggingIn: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: '',
        loggingIn: false
      }
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