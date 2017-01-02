import React from 'react';  
import ReactDOM from 'react-dom';  
import { Router, Link, Route, IndexRoute, hashHistory } from 'react-router';
import Main from './containers/main.jsx';
import store from './reducers/mainReducer.js';

require('./styles/main.scss');

const app = document.getElementById('app');


const render = () => {
  ReactDOM.render(
    <Main {...store.getState()}/>,
    document.getElementById('app')
  )}

store.subscribe(render)
render()