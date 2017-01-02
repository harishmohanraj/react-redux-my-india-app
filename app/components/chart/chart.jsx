import React, {Component} from 'react';
import {Bar} from 'react-chartjs';

require('./chart.scss');

export default class Chart extends React.Component{
    constructor(){
        super()
        this.state={
            chartData :{
                labels: [],
                datasets: [
                    {
                        label: "My First dataset",
                        borderWidth: 1,
                        data: [],
                    }
                ]
            } 
        }
    }

    componentDidMount(){
        console.log(this.props.dataList);
        this.setState({
            chartData : {
                labels: ["January", "February", "March", "April", "May"],
                datasets: [
                    {
                        data: ["10","10","10","10","10"],
                    }
                ]
            }
        })
    }


    render(){
        return <Bar data={this.state.chartData} width="600" height="250"/>
    }
}