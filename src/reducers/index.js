import { combineReducers } from 'redux'
import {
  SELECTED_FILTER, INVALIDATE_REDDIT,
  REQUEST_DATA, RECEIVE_DATA
} from '../actions'

const selectedAPI = (state = 'crimeInStates', action) => {
  switch (action.type) {
    case SELECTED_FILTER:
      return action.selectedAPI
    default:
      return state
  }
}

const changeStatusFlag = (state = {
  isFetching: false,
  data: []
}, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_DATA:
      return {
        ...state,
        isFetching: false,
        data: action.data
      }
    default:
      return state
  }
}

const myIndiaReport = (state = { }, action) => {
  switch (action.type) {
    case INVALIDATE_REDDIT:
    case RECEIVE_DATA:
    case REQUEST_DATA:
      return {
        ...state,
        [action.selectedAPI]: changeStatusFlag(state[action.selectedAPI], action)
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  myIndiaReport,
  selectedAPI
})

export default rootReducer
