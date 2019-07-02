import React from "react";
import './Header.scss';
import Logo from '../Logo/Logo';
import $ from "jquery";
import smoothscroll from 'smoothscroll-polyfill';

class Header extends React.Component {
    clickMethod(e){
      console.log(e);
    }
    componentDidMount() {
      smoothscroll.polyfill();
      $('#toggle').click(function() {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
       });

       console.log(document.querySelectorAll('.header-links a'));

       let links = document.querySelectorAll('.header-links a');
       let links2 = document.querySelectorAll('.overlay-menu a');

       for(let i=0; i<links.length; i++) {
         console.log(links);
        //  console.log(links[i])
        if(i<4) {
          links[i].addEventListener('click', (d) => {
            console.log(d);
            let text = links[i].querySelector('span').textContent;
            this.scrollPage(text);
          })
        }
       }

       for(let i=0; i<links2.length; i++) {
         console.log(links[i])
         links2[i].addEventListener('click', (d) => {
           let text = links2[i].textContent;
           this.scrollPageHamburger(text);
         })
       }


      //  let links = document.getElementsByClassName('header-links').querySelectorAll('a');
    }
    scrollPage(text) {
      if( text.includes("HOME")) {
        this.handleScroll($('div.home'));
      } else if (text.includes("ABOUT ME")) {
        this.handleScroll($('div.aboutMe'));
      } else if ( text.includes("PROJECTS")) {
        this.handleScroll($('div.projects'));
      } else if ( text.includes("CONTACT")) {
        this.handleScroll($('div.contactMe'));
      }
    }

    scrollPageHamburger(text) {
      
      $('.header .button_container').toggleClass('active');
      $('#overlay').toggleClass('open');
      
      console.log(text);
      setTimeout(()=> {
        console.log("scrollllllllll");
        if( text.includes("HOME")) {
          this.handleScroll($('div.home'));
        } else if (text.includes("ABOUT ME")) {
          this.handleScroll($('div.aboutMe'));
        } else if ( text.includes("PROJECTS")) {
          this.handleScroll($('div.projects'));
        } else if ( text.includes("CONTACT")) {
          this.handleScroll($('div.contactMe'));
        }
      }, 200)
    }

    handleScroll = e => {
      console.log(e[0].offsetTop);
      window.scrollTo({ top: e[0].offsetTop - 100, left: 0, behavior: 'smooth' });
    }

    render() {
        return (
            <nav className={"header flex-desk-fixed " + this.props.type +" " + this.props.hidden + "" }>
              <div className="header-author-name">
              <Logo />
              </div>
              <div className="header-links">
                <a className="header-home" >
                  <span>
                    HOME
                      </span>
                </a>
                <a className="header-about" >
                  <span >
                    ABOUT ME
                      </span>
                </a>
                <a className="header-projects">
                  <span >
                    PROJECTS
                      </span>
                </a>
                <a className="header-contact" >
                  <span>
                    CONTACT
                      </span>
                </a>
                <div className="button_container" id="toggle"><span className="top"></span><span className="middle"></span><span className="bottom"></span></div>
                  <div className="overlay" id="overlay">
                    <nav className="overlay-menu">
                      <ul>
                        <li className="overlay-home"><a>HOME</a></li>
                        <li className="overlay-about"><a>ABOUT ME</a></li>
                        <li className="overlay-projects"><a>PROJECTS</a></li>
                        <li className="overlay-contact"><a>CONTACT</a></li>
                      </ul>
                    </nav>
                  </div>
              </div>
            </nav>
          // <div>
          // <div class="button_container" id="toggle"><span class="top"></span><span class="middle"></span><span class="bottom"></span></div>
          //   <div class="overlay" id="overlay">
          //     <nav class="overlay-menu">
          //       <ul>
          //         <li><a href="#">Home</a></li>
          //         <li><a href="#">About</a></li>
          //         <li><a href="#">Work</a></li>
          //         <li><a href="#">Contact</a></li>
          //       </ul>
          //     </nav>
          //   </div>
          // </div>
            
          );
    }
}

export default Header;
