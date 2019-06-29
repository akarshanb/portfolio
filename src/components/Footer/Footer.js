import React from "react";
import './Footer.scss';

import instagram from '../../resources/instagram.svg';
import facebook from '../../resources/facebook1.svg';
import linkedin from '../../resources/linkedin1.svg';
import twitter from '../../resources/twitter.svg';

class Footer extends React.Component {
    imgHeight = 20;
    imgWidth = 20;

    render() {
        return (
            <div className="footer">
                <div className="footer-icons">
                    <a href= { "https://www.instagram.com/akarshanb/" } target="_blank"><img alt="" src={ instagram }
                                            height={ this.imgHeight }
                                            width={ this.imgWidth } /></a>
                     <a href= { "https://www.facebook.com/akarshan.bansal" } target="_blank"><img alt="" src={ facebook }
                                            height={ this.imgHeight }
                                            width={ this.imgWidth } /></a>
                     <a href= { "https://www.linkedin.com/in/akarshan-bansal-9207" } target="_blank"><img alt="" src={ linkedin }
                                            height={ this.imgHeight }
                                            width={ this.imgWidth } /></a>
                     <a ><img alt=""  target="_blank" src={ twitter }
                                            height={ this.imgHeight }
                                            width={ this.imgWidth } /></a>
                </div>
                <div className="footer-content">
                AKARSHAN BANSAL <span className="copyright"> ©2019</span> 
                </div>

            </div>
          );
    }
}

export default Footer;
