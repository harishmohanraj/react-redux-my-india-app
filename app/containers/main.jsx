import React, {Component} from 'react';  
import ReactDOM from 'react-dom';  
import * as MainAction from '../actions/main-action.js';
import config from '../config/config.js';
import Header from '../components/header/header.jsx';
import SideBar from '../components/sidebar/sidebar.jsx';
import store from '../reducers/mainReducer.js'
import CrimeInStates from './crime-in-states.jsx';


export default class Main extends React.Component {
    
  componentDidMount(){
    const requestObj = {
      'url': config.crimeInState,
      'actionType': 'LOAD_CRIME_DATA'
    }

    MainAction.makeAjaxRequest(requestObj)
  }

  render(){
    return(
      <div className="col-12">
        <div className="col-2">
          <SideBar />
        </div>
        <div className="col-10">
          <Header />
          <div className="main-container">
            <CrimeInStates {...this.props.crimeInStateData} />
          </div>
        </div>
      </div>
    );
  }
}
