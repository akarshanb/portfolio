import React from "react";
// import Header from "../Header/Header";
import './Contact-Me.scss';
import * as d3 from 'd3';

class ContactMe extends React.Component {
    render() {
        return (
                <div className="contactMe">
                    <div className="heading col-xs-12">
                                <div className="first">
                                    <span>LIKE WHAT YOU SEE !</span>
                                </div>
                                <div className="second">
                                    <span>CONTACT ME</span>
                                </div>
                                <hr></hr>
                                <div className="row msgBox mr0">
                                    <div className="input1 col-xs-6">
                                        <input className=""  placeholder="NAME"/>
                                    </div>
                                    <div className="input2 col-xs-6" >
                                        <input className="" placeholder="EMAIL" type="email" />
                                    </div>
                                </div>
                                <div className="row textarea col-xs-12 mr0">
                                        <textarea  rows="5" cols="112" placeholder="Enter Message">
                                        </textarea>
                                </div>
                                <div className="row sendButtonContainer col-xs-12 mr0">
                                    <div className="sendButton">
                                        <span>SEND</span>
                                    </div>  
                                </div>
                    </div>
                    <div>
                    
                    </div>
                </div>
        );
    }

    componentDidMount() {
    }
}

export default ContactMe;