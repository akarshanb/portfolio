import React from "react";
import Header from "../Header/Header";
import './Projects.scss';
import * as d3 from 'd3';
import img from '../../resources/water.jpg';
import img2 from '../../resources/container1.jpg';
import img3 from '../../resources/clouds.jpg';
import ProjectBox from "./Project-Box";

let style = {
    backgroundImage: img
}

class Projects extends React.Component {
    render() {
        return (
            <div>
                {/* <Header type={'white'}/> */}
                <div style={style} className="projects">
                    <div className="heading col-xs-12">
                        <span>PROJECTS</span>
                        <hr></hr>
                    </div>

                    <div className="layout">
                        <ProjectBox type="AWA" id="a" img= {img} content="AWA"/>
                        <ProjectBox type="ARIS" id="b" img= {img3} content="ARIS" />
                        <ProjectBox type="AFLS" id="c" img= {img2} content="AFLS" />
                    </div>
                    
                </div>
            </div>
        );
    }

    // componentDidMount() {

    //     let svg = d3.select(".layout svg");

    //     svg.append("defs")
    //         .append('pattern')
    //         .attr('id', 'locked2')
    //         .attr('patternUnits', 'userSpaceOnUse')
    //         .attr('width', 10200)
    //         .attr('height', 800)
    //         .append("image")
    //         .attr("xlink:href", img)
    //         .attr('width', 1200)
    //         .attr('height', 800);

    //     let path = svg
    //         .append("path")
    //         // trying to draw a diamond here 
    //         .attr("d", "M 250 0 400 125 250 250 0 125Z")
    //         .style("stroke-width", 1)
    //         .style("stroke-dasharray", "1,0")
    //         .style("fill", 'url(#locked2)')
    //         .on('mouseover', () => {
    //             d3.select('path').style('fill', 'url(#locked2')
    //             .style('opacity', 0.4)

    //             d3.select('text').style('stroke', '#686161').attr("fill", "#686161");
    //         })
    //         .on('mouseout', () => {
    //             d3.select('path').style('fill', 'url(#locked2').style('opacity', 1)
    //             d3.select('text').style('stroke', 'white').attr("fill", "white");
    //         });

    //         append();

    //         function append()  {
    //             svg.append("text")
    //             .text("WATER ANALYTICS")
    //             .attr("transform", "translate(150,125)")
    //             .attr("font-family","Muli")
    //             .attr("stroke", "white")
    //             .attr("fill", "white")
    //             .style("font-size", "20px");
    //         }
    // }
}

export default Projects;