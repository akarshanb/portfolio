import React from "react";
import './Projects.scss';
import * as d3 from 'd3';
import img from '../../resources/blossom.jpg';
import ReactDOM from 'react-dom';

let style = {
    backgroundImage: img
}

class ProjectBox extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <div className="box" ref={this.box}>
            </div>
        );
    }

    componentDidMount() {

        this.box = ReactDOM.findDOMNode(this);

        console.log(this.box)

        let svg = d3.select(this.box)
            .append('svg')
            .attr("width",  500)
            .attr("height", 300);

        svg.append("defs")
            .append('pattern')
            .attr('id', this.props.id)
            .attr('patternUnits', 'userSpaceOnUse')
            .attr('width', 600)
            .attr('height', 400)
            .append("image")
            .attr("xlink:href", this.props.img)
            .attr('width', 600)
            .attr('height', 400);

        let path = svg
            .append("path")
            // trying to draw a diamond here 
            .attr("d", "M 350 0 500 150 350 300 0 150Z")
            .style("stroke-width", 1)
            .style("stroke-dasharray", "1,0")
            .style("fill", 'url(#'+this.props.id+')')
            .on('mouseover', () => {
                svg.select('path').style('fill', 'url(#'+this.props.id+')')
                .style('opacity', 0.4)

                svg.select('text').style('stroke', '#686161').attr("fill", "#686161");
            })
            .on('mouseout', () => {
                svg.select('path').style('fill', 'url(#'+this.props.id+')').style('opacity', 1)
                svg.select('text').style('stroke', 'white').attr("fill", "white");
            });

            

            let append = () =>  {
                svg.append("text")
                .text(this.props.content)
                .attr('class', this.props.type)
                // .attr("transform", "translate(200,150)")
                .attr("font-family","Muli")
                .attr("stroke", "white")
                .attr("fill", "white")
                .style("font-size", "25px");
            }
            append();
    }
}

export default ProjectBox;