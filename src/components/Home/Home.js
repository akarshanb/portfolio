import React from "react";
import "./Home.scss";
import Header from "../Header/Header";
import AboutMe from "../About-Me/About-Me";
import ContactMe from "../Contact-Me/Contact-Me";
import Projects from "../Projects/Projects";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.about = React.createRef();
        this.headerType="transparent";
      }
    render() {
        return (
            <div className="home">
            <Header type={ this.headerType }/>
            <div className="homeImg">
                <div className="row mainHeading">
                    <span>AKARSHAN BANSAL</span>
                </div>
                <div className="row secondHeading">
                    <span>Full Stack Developer</span>
                </div>
                <div onClick={this.handleScroll} className="row workbutton">
                        <span>CHECK MY WORK</span>
                </div>
            </div>
            <div ref={this.about}>
            <AboutMe  />
            <Projects />
            <ContactMe />
            </div>            
          </div> 
        )
    }
    handleScroll = e => {
        this.headerType = "white";
        e.preventDefault();
        const about = this.about.current;
        window.scrollTo({
          top: about.offsetTop,
          left: 0,
          behavior: "smooth"
        });
      };
}

export default Home;
