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
    constructor(props) {
        super(props)
        this.layoutRef = React.createRef();
        this.firstRef = React.createRef();
        this.secondRef = React.createRef();
        this.thirdRef = React.createRef();
        this.handleHover = this.handleHover.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    handleHover = () => {
        console.log("HOVER");
    }
    onClick = (ref) => {
        console.log(ref)
    }
    render() {
        return (
            <div>
                {/* <Header type={'white'}/> */}
                <div style={style} className="projects">
                    <div className="heading col-xs-12">
                        <span>PROJECTS</span>
                        <hr></hr>
                    </div>

                    <div className="layout row" ref={this.layoutRef}>
                        <div className="col-md-4 col-sm-12 first" ref={this.firstRef}  onClick={this.onClick(this.firstRef)}>
                            <div>
                                <span>
                                    FREIGHT & 
                                </span>
                                <span>
                                    LOGISTICS
                                </span>
                                <span>
                                    SOFTWARE
                                </span>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 second" ref={this.secondRef} onClick={this.onClick(this.secondRef)}>
                            <div>
                                <span>
                                    INTELLIGENT
                                </span>
                                <span>
                                    RESOURCES
                                </span>
                                <span>
                                    SOLUTION
                                </span>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 third" ref={this.thirdRef} onClick={this.onClick(this.thirdRef)}>
                            <div>
                                <span>
                                    WATER
                                </span>
                                <span>
                                    ANALYTICS
                                </span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }

    componentDidMount() {

    }


}

export default Projects;