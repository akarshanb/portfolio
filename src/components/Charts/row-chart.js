import * as d3 from 'd3';
import React from "react";
import './row-chart.scss';

class RowChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{skill: "CSS", value: 80},{skill: "HTML", value: 70},{skill: "JS", value: 85},{skill: "ANGULAR", value: 90},{skill: "REACT", value: 75},{skill: "D3", value: 70},{skill: "NODE JS", value: 65},{ skill: "JAVA", value: 65},{skill: "UI DESIGN", value: 70},{skill: "XD", value: 65}],
            yAxisAttribute: "skill",
            xAxisAttribute: "value",
            width: 0,
            height: 0,
        }
        this.screenSize = window.width;
    }

    render() {
        return (
            <div className="rowChart">
            </div>
        )
    }
    componentDidMount() {
        localStorage.setItem("width", window.innerWidth)
        let width = this.setWidth()
        let height = document.getElementsByClassName("rowChart")[0].parentElement.offsetHeight + 50;
        this.setState({width: width, height: height}, ()=> {
            this.drawChart = this.drawChart.bind(this);
            this.drawChart();
        });
        let resizedFn;
        window.addEventListener("resize", () => {
            let screen = this.screenSize;
            console.log(localStorage.getItem("width"))
            console.log(window.innerWidth)
            if (Math.abs(localStorage.getItem("width") - window.innerWidth) > 2) {
                localStorage.setItem("width", window.innerWidth)
                clearTimeout(resizedFn);
                resizedFn = setTimeout(() => {
                    this.redrawChart();
                }, 0)
            }
        });
    }

    setWidth(){
        let width = document.getElementsByClassName("rowChart")[0].parentElement.offsetWidth;
        if(width > 700) {
            return width * 0.75;
        } else if (width < 500) {
            return width * 0.85;
        } else {
            return width * 0.9;
        }
    }
    
    redrawChart() {
        let width = this.setWidth()
        this.setState({width: width});
        d3.select(".rowChart svg").remove();
        this.drawChart = this.drawChart.bind(this);
        this.drawChart();
    }

    drawChart() {
        // let data = [{skill: "CSS", value: 80},{skill: "HTML", value: 70},{skill: "JS", value: 85},{skill: "ANGULAR", value: 90},{skill: "REACT", value: 60},{skill: "D3", value: 60},{skill: "NODE JS", value: 65},{skill: "UI DESIGN", value: 70},{skill: "XD", value: 65}];

        let margin = {top: 20, right: 30, bottom: 40, left: 90},
            width = this.state.width - margin.left - margin.right,
            height = this.state.height - margin.top - margin.bottom;

        // append the svg object to the body of the page
        let svg = d3.select(".rowChart")
        .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

        // Add X axis
        let x = d3.scaleLinear()
            .domain([0, 100])
            .range([ 0, width]);
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .attr('class','axis x')
            .call(d3.axisBottom(x))
            .selectAll("text")
            .attr("font-family","Muli")
            .attr("transform", "translate(-10,0)rotate(-45)")
            .style("text-anchor", "end");

        // Y axis
        let y = d3.scaleBand()
            .range([ 0, height ])
            .domain(this.state.data.map((d) => d[this.state.yAxisAttribute]))
            .padding(.1);
        svg.append("g")
            .attr('class','axis y')
            .call(d3.axisLeft(y))
            .selectAll("text")
            .attr("dy", null)

        d3.select(".axis.y").attr("font-family","Muli_SemiBold");

        svg.selectAll("myRect")
        .data(this.state.data)
        .enter()
        .append("rect")
        .attr("x", x(0) )
        .attr("y", (d) => y(d[this.state.yAxisAttribute]))
        .attr("width", 0)
        .attr("height", y.bandwidth() -10 )
        .attr("fill", "#d0639236")
        .transition(d3.transition().duration(1000))
            .attr("width", this.state.width - 100)

        //Bars
        svg.selectAll("myRect")
            .data(this.state.data)
            .enter()
            .append("rect")
            .on('mouseover', function(){
                d3.select(this).style('opacity', 0.5)
            })
            .on('mouseout', function(){
                d3.select(this).style('opacity', 1)
            })
            .attr("x", x(0) )
            .attr("y", (d) => y(d[this.state.yAxisAttribute]))
            .attr("width", 0)
            .attr("height", y.bandwidth() -10 )
            .attr("fill", "#DF337D")
            .transition(d3.transition().duration(1000))
                .attr("width", (d) => x(d[this.state.xAxisAttribute]))
            // .append("text")
            //     .text(d => d[this.state.xAxisAttribute])
            //     .attr("font-family","Muli");
            
            svg.selectAll(".label")
                .data(this.state.data)
                .enter()
                .append("text")
                .text(d => d[this.state.xAxisAttribute]+"%")
                .attr("font-family","Muli")
                .attr("class", "bar-label")
                .attr("font-size", "10px")
                .attr("height", y.bandwidth() -10 )
                .attr("width", 0)
                .attr("fill", "#131313")
                .attr("x", x(0) )
                .attr("y", (d) => y(d[this.state.yAxisAttribute]) + 17)
                .transition(d3.transition().duration(1000))
                    .attr("x", (d) => x(d[this.state.xAxisAttribute] + 2));
                


    }
}

export default RowChart;
