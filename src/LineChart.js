import React, { Component, useRef } from 'react'
import ReactDOM from 'react-dom'
import * as d3 from 'd3'
import { create } from 'd3'


class LineChart extends Component {
    constructor(props) {
        super(props)
        this.createLineChart = this.createLineChart.bind(this)

        this.renderData = this.renderData.bind(this)
        this.svgRef = React.createRef();

    }


    componentDidMount() {
        this.createLineChart()
    }
    componentDidUpdate() {
        this.createLineChart()


    }

    renderData(d) {
        let line = d3.line();
        // line.x(function (d) { return x(d.x); })
        // line.y(function (d) { return y(d.y); })
        return line(this.props.data);
    }

    createLineChart() {
        const _self = this;
        const node = this.refs.graph;
        var width = 500,
            height = 500,
            margin = 50,
            x = d3.scaleLinear()
                .domain([0, 10])
                .range([margin, width - margin]),
            y = d3.scaleLinear()
                .domain([0, 10])
                .range([height - margin, margin]);

        d3.range(10).map(function (i) {
            return { x: i, y: Math.sin(i) + 5 };
        })


        var svg = d3.select(ReactDOM.findDOMNode(this.svgRef.current))

        let aData = [1, 2, 3, 4, 5]
        d3.select("body").append("p").text("hogehoge foobar");
        d3.select("body").selectAll("p").data(aData).enter().append("p").text(a => { return a })


        svg.attr("height", height)
            .attr("width", width);

        let path = svg.selectAll("path")
            .attr("class", "line")
            .attr("d", this.renderData);

        renderAxes(svg);

        function renderAxes(svg) {
            var xAxis = d3.axisBottom()
                .scale(x.range([0, quadrantWidth()]))
                .scale(x);

            var yAxis = d3.axisLeft()
                .scale(y.range([quadrantHeight(), 0]))
                .scale(y);

            svg.append("g")
                .attr("class", "axis")
                .attr("transform", function () {
                    return "translate(" + xStart()
                        + "," + yStart() + ")";
                })
                .call(xAxis);

            svg.append("g")
                .attr("class", "axis")
                .attr("transform", function () {
                    return "translate(" + xStart()
                        + "," + yEnd() + ")";
                })
                .call(yAxis);
        }

        function xStart() { return margin; }
        function yStart() { return height - margin; }
        function xEnd() { return width - margin; }
        function yEnd() { return margin; }
        function quadrantWidth() { return width - 2 * margin; }
        function quadrantHeight() { return height - 2 * margin; }
    }

    render() {

        return (<svg ref={this.svgRef}>
            <path />
        </svg>)
    }
}

export default LineChart