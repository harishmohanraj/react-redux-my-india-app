import { createStore, combineReducers } from 'redux';
import * as MainAction from '../actions/main-action.js';
import config from '../config/config.js'
// import OurLeaders from './our-leaders.js';
// import CrimeInStates from './crime-in-states.js';
// import AccidentsInCities from './accidents-in-cities.js';



// const myIndiaApp = combineReducers({
//   OurLeaders,
//   CrimeInStates,
//   AccidentsInCities
// });

function myIndiaApp(state = {}, action) {
	switch (action.type) {
	  case 'LOAD_CRIME_DATA':
	    return {
	    	...state,
	    	crimeInStateData: action.value
	    }
	  case 'ON_FILTER_CHANGE':
	    return {
	    	...state,
	    	crimeInStateFilter: action.value
	    }

	  default:
	    return state
	}
}


let store = createStore(myIndiaApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;


