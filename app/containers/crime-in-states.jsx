import React, {Component} from 'react';  
import ReactDOM from 'react-dom'; 
import FormatChartData from '../utils/formatChartData.js'
import Chart from '../components/chart/chart.jsx';


export default class CrimeInStates extends React.Component{
    
    renderChart(crimesDataObj, selectedItem){
        return crimesDataObj ? <Chart dataList={FormatChartData(crimesDataObj, selectedItem)}/> : <div className="spinner"></div>;
    }

    onChange(e) {
        this.props.onChange(e.target.value);
    }
    
    render(){
        let crimesDataObj = this.props.chartObj;
        let selectedItem = this.props.filter || "RAPE (SECTION 376 IPC)";
        return(
            <div className="col-12">
                <h1>Crime in States</h1>
                <label>Crime type: </label>
                <select 
                defaultValue = "RAPE (SECTION 376 IPC)"
                onChange = {this.onChange.bind(this)}
                >
                    <option value = "RAPE (SECTION 376 IPC)">Rape</option>
                    <option value = "DOWRY DEATHS (SECTION 304B IPC)">Dowry Deaths</option>
                    <option value = "ASSAULT ON WOMEN WITH INTENT TO OUTRAGE HER MODESTY (SECTION 354 IPC)">Assault on Women</option>
                    <option value = "IMMORAL TRAFFIC (PREVENTION) ACT, 1956">Immoral Traffic</option>
                    <option value = "KIDNAPPING AND ABDUCTION (SECTION 363 TO 369, 371 TO 373 IPC)">Kidnapping and Abduction</option>
                    <option value = "CRUELTY BY HUSBAND OR HIS RELATIVES (SECTION 498A IPC)">Cruelity by husband</option>
                    <option value = "TOTAL CRIMES AGAINST WOMEN">Total crimes against women</option>
                </select>
                {this.renderChart(crimesDataObj, selectedItem)}
            </div>
        )
    }

}