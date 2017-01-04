import config from '../config/config.js';

export const REQUEST_DATA = 'REQUEST_DATA'
export const RECEIVE_DATA = 'RECEIVE_DATA'
export const SELECTED_FILTER = 'SELECTED_FILTER'

export const selectFilter = selectedAPI => ({
  type: SELECTED_FILTER,
  selectedAPI
})

export const requestData = selectedAPI => ({
  type: REQUEST_DATA,
  selectedAPI
})

export const receiveData = (selectedAPI, json) => ({
  type: RECEIVE_DATA,
  selectedAPI,
  data: json.data
})

const fetchPosts = selectedAPI => dispatch => {
  dispatch(requestData(selectedAPI))
  return fetch(config.crimeInState)
    .then(response => response.json())
    .then(json => dispatch(receiveData(selectedAPI, json)))
}

export const fetchData = selectedAPI => (dispatch, getState) => {
    return dispatch(fetchPosts(selectedAPI))
}
