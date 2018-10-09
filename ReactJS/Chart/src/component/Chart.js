import React, { Component } from 'react';
import * as d3 from 'd3';
import ReactFauxDOM from 'react-faux-dom';

class Chart extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: props.data
        }
    }
    static defaultProps = {
        width: 500,
        height: 500,
        chartBg: '#f4f4f4',
        barColor: '#ff0000',
        barWidth: 40,
        barOffset: 5
    }
    render() {
        const chart = ReactFauxDOM.createElement('div');
        d3.select(chart).append('svg')
            .attr('width', this.props.width)
            .attr('height', this.props.height)
            .style('background', this.props.chartBg)
            .selectAll('rect')
            .data(this.state.data)
            .enter().append('rect')
                .style('fill', this.props.barColor)
                .attr('width', this.props.barWidth)
                .attr('height', (d)=>{
                    return d;
                })
                .attr('x', (d, i)=> i * (this.props.barWidth + this.props.barOffset))
                .attr('y', (d)=>this.props.height - d)
        return chart.toReact();
    }
}

export default Chart