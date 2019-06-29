import React from "react";
import Header from "../Header/Header";
import './About-Me.scss';
import resposive from '../../resources/responsive.svg';
import visualization from '../../resources/diagram.svg';
import speed from '../../resources/chronometer.svg';
import clientImg from '../../resources/hand-shake.svg';
import RowChart from "../Charts/row-chart";

const imgWidth = 100 * 1.2;
const imgHeight = 87 *1.2;

class AboutMe extends React.Component {
    render() {
        return (
                <div className="aboutMe">
                    <div className="heading col-xs-12">
                        <span>ABOUT ME</span>
                        <hr></hr>
                    </div>
                    <div className="intro row col-xs-12">
                        <span className="">I am a full-stack web developer with 4+ years of experience currently working with Accenture.
                        I'm highly passionate about working with responsive layouts, 2D & 3D
                        visualizations, animations and dynamic designs. </span>
                    </div>
                    <div className=" content col-xs-12">
                        <div className="row mr0">
                            <div className="col-12 col-md-6 icons">
                                <div className="row first">
                                    <div className="col-xs-6 icon">
                                        <img alt=""
                                            src={resposive} 
                                            height={ imgHeight }
                                            width={ imgWidth } />
                                        <div className="label">
                                            <span className="">RESPONSIVE</span>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 icon">
                                        <img alt=""
                                            src={visualization} 
                                            height={ imgHeight }
                                            width={ imgWidth } />
                                        <div className="label">
                                            <span className="">VISUALIZATIONS</span>
                                        </div>
                                    </div>
                            </div>
                            <div className="row second">
                                <div className="col-xs-6 icon">
                                    <img alt=""
                                        src={speed} 
                                        height={ imgHeight }
                                        width={ imgWidth } />
                                    <div className="label">
                                        <span className="">FAST LOADING</span>
                                    </div>
                                </div>
                                <div className="col-xs-6 icon">
                                    <img alt=""
                                        src={clientImg} 
                                        height={ imgHeight }
                                        width={ imgWidth } />
                                    <div className="label">
                                        <span className="">CLIENT ORIENTED</span>
                                    </div>
                                </div>
                            </div>                             
                        </div>
                            <div className="col-12 col-md-6 chart"><RowChart /></div>
                            
                        </div>
                    </div>
                </div>
        );
    }
}

export default AboutMe;