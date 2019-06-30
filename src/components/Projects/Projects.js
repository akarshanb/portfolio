import React from "react";
import Header from "../Header/Header";
import './Projects.scss';
import * as d3 from 'd3';
import img from '../../resources/water.jpg';
import img2 from '../../resources/container1.jpg';
import img3 from '../../resources/clouds.jpg';
import ProjectBox from "./Project-Box";
import $ from 'jquery';

let style = {
    backgroundImage: img
}

class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.layoutRef = React.createRef();
        this.firstRef = React.createRef();
        this.secondRef = React.createRef();
        this.thirdRef = React.createRef();
        this.handleHover = this.handleHover.bind(this);
        this.onClick = this.onClick.bind(this);


    }
    componentDidMount() {
        let links = document.querySelectorAll('.projects .layout > div');
        console.log(links);
        for(let i=0; i<links.length; i++) {
            console.log(links[i]);
            links[i].addEventListener('mouseover', d => {
                for(let j=0; j<links.length; j++) {
                    if(links[i] !== links[j]) {
                        links[j].classList.add("unactive");
                    }
                }
            })
            links[i].addEventListener('mouseout', d => {
                for(let j=0; j<links.length; j++) {
                    if(links[i] !== links[j]) {
                        links[j].classList.remove("unactive");
                    }
                }
            })
        }
    }

    handleHover = () => {
        console.log("HOVER");
    }
    onClick = (ref) => {
        console.log(ref)
    }
    render() {
        return (
                <div style={style} className="projects">
                    <div className="heading col-xs-12">
                        <span>PROJECTS</span>
                        <hr></hr>
                    </div>

                    <div className="layout row" ref={this.layoutRef}>
                        <div className="col-md-4 col-sm-12 first" ref={this.firstRef}  onClick={this.onClick(this.firstRef)}>
                            <div className="row project-img mr0">

                            </div>
                            <div className="row project-text">
                                <div>
                                    <span>
                                    Freight & Logistics
                                    </span>
                                    <span>
                                    Software
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-4 col-sm-12 second" ref={this.secondRef} onClick={this.onClick(this.secondRef)}>
                            <div className="row project-img mr0">
                                
                            </div>
                            <div className="row project-text">
                                <div>
                                    <span>
                                    Intelligent Resources
                                    </span>
                                    <span>
                                    Solution
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 third" ref={this.thirdRef} onClick={this.onClick(this.thirdRef)}>
                            <div className="row project-img mr0">
                                    
                            </div>
                            <div className="row project-text">
                                <div>
                                    <span>
                                        Water Analytics
                                    </span>
                                    <span>
                                        Software
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Projects;