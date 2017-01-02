import React, {Component} from 'react';  
import ReactDOM from 'react-dom'; 
import CrimeInStatesStore from '../stores/crime-in-states-store.js';
import * as MainAction from '../actions/main-action.js';
import config from '../config/config.js';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import FormatChartData from '../utils/formatChartData.js'
import Chart from '../components/chart/chart.jsx';


export default class CrimeInStates extends React.Component{
    constructor(){
        super();
        this.state={
            crimeInStatesData : null
        }
        this.updateState = this.updateState.bind(this);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    updateState(){
        this.setState({
            crimeInStatesData : CrimeInStatesStore.getState().crimeInStatesData || null
        })
    }

    componentDidMount(){
        this.getCrimeInStatesData();
    }

    componentWillMount(){
        CrimeInStatesStore.on('change',this.updateState);
    }

    componentWillUnmount(){
        CrimeInStatesStore.removeListener('change',this.updateState);        
    }

    getCrimeInStatesData(){
        const requestObj = {
            'url':config.crimeInState,
            'actionType':'GET_CRIME_DATA'
        }
        MainAction.makeAjaxRequest(requestObj);
    }

    renderChart(crimesDataList){
        return crimesDataList ? <Chart dataList={FormatChartData(crimesDataList)}/> : <div className="spinner"></div>;
    }
    
    render(){
        return(
            <div className="col-12">
                <h1>Crime in States</h1>
                {this.renderChart(this.state.crimeInStatesData)}
            </div>
        )
    }

}