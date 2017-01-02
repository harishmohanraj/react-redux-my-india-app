import React, {Component} from 'react';
import {Bar} from 'react-chartjs';

require('./chart.scss');

export default class Chart extends React.Component{

    render(){
        const chartData = {
            labels: this.props.dataList.itemName,
            datasets: [
                {
                    data: this.props.dataList.itemValue,
                }
            ]
        }

        return <Bar data={chartData} width="600" height="250"/>
    }
}