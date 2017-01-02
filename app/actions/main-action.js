import axios from 'axios';
import store from '../reducers/mainReducer.js';

export function makeAjaxRequest(requestObj) {
    const actionType = requestObj.actionType;
    axios.get(requestObj.url)
        .then((response) => successHandler(response, actionType))
        .catch((error) => failureHandler(error))
}

function successHandler(response, actionType) {
    store.dispatch({
        type: actionType,
        value: response
    });
}

function failureHandler(error) {
    store.dispatch({
        type: "RESPONSE_DATA_FAILURE",
        value: error
    });
}