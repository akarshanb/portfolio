import React from "react";
import "./Home.scss";
import Header from "../Header/Header";
import AboutMe from "../About-Me/About-Me";
import ContactMe from "../Contact-Me/Contact-Me";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";
import $ from 'jquery';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.about = React.createRef();
        this.headerType="transparent";
        this.headerHidden = "hidden-true";
      }
    render() {
        return (
            <div className="home">
            <Header type={ this.headerType } clickMethod={this.clickMethod}/>
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
            {/* <Header type={ 'white' } hidden= { this.headerHidden }/> */}
            <AboutMe  />
            <Projects />
            <ContactMe />
            <Footer />
            </div>            
          </div> 
        )
    }

    clickMethod(e) {
        console.log(e)
        console.log("clickMethod")
    }

    componentDidMount() {
        this.setHeaderLinks('home');
        window.addEventListener('scroll',  () => {
            this.updateHeaderLinks();
        }, false);
    }

    updateHeaderLinks() {
        // console.log('asdadasdasdasdasdasd');
        if(window.pageYOffset > 620 && window.pageYOffset < 1316) {
            this.changeStyleHeader('white','transparent');
            this.setHeaderLinks('about')
        } else if (window.pageYOffset < 1800 && window.pageYOffset > 1316) {
            this.setHeaderLinks('projects');
            this.changeStyleHeader('white','transparent');
        } else if (window.pageYOffset > 1800) {
            this.setHeaderLinks('contact');
            this.changeStyleHeader('white','transparent');
        } else if (window.pageYOffset < 50 ) {
            this.setHeaderLinks('home');
            this.changeStyleHeader('transparent','white');
        }
    }

    setHeaderLinks(type) {
        this.removeActiveClasses();
        $('.header-links a.header-'+type)[0].classList.add('active');
        $('.overlay-menu .'+type+ ' a')[0].classList.add('active');
    }

    removeActiveClasses() {
        let list1 = $('.header-links a');
        let list2 = $('.overlay-menu a');
        for(let i=0; i < list1.length; i++) {
            list1[i].classList.remove('active');
        }
        for(let i=0; i < list2.length; i++) {
            list2[i].classList.remove('active');
        }
    }

    handleScroll = e => {
        this.changeStyleHeader();
        // this.headerType = "white";
        // e.preventDefault();
        const about = this.about.current;
        window.scrollTo({
          top: about.offsetTop - 100,
          left: 0,
          behavior: "smooth"
        });
      };

    changeStyleHeader(add, remove) {
        document.getElementsByClassName('header')[0].classList.remove(remove);
        document.getElementsByClassName('header')[0].classList.add(add);
    }

    elementInViewport2 = el => {
        console.log(el);
        var top = el.offsetTop;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;
      
        while(el.offsetParent) {
          el = el.offsetParent;
          top += el.offsetTop;
          left += el.offsetLeft;
        }
      
        return (
          top < (window.pageYOffset + window.innerHeight) &&
          left < (window.pageXOffset + window.innerWidth) &&
          (top + height) > window.pageYOffset &&
          (left + width) > window.pageXOffset
        );
    }
}

export default Home;
