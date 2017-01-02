import React, {Component} from 'react';  
import ReactDOM from 'react-dom'; 
import FormatChartData from '../utils/formatChartData.js'
import Chart from '../components/chart/chart.jsx';


export default class CrimeInStates extends React.Component{
    
    renderChart(crimesDataList){
        return crimesDataList ? <Chart dataList={FormatChartData(crimesDataList)}/> : <div className="spinner"></div>;
    }
    
    render(){
        return(
            <div className="col-12">
                <h1>Crime in States</h1>
                {this.renderChart(this.props.data)}
            </div>
        )
    }

}