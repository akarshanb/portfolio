import React from "react";
import { Link } from "react-router-dom";
import './Header.scss';
import Logo from '../Logo/Logo';

class Header extends React.Component {
    render() {
        return (
            <nav className={"header flex-desk-fixed " + this.props.type +"" }>
              <div className="header-author-name">
              <Logo />
              </div>
              <div className="header-links">
                <Link to="/home" activeclassname="active">
                  <span>
                    HOME
                      </span>
                </Link>
                <Link to="/about" activeclassname="active">
                  <span>
                    ABOUT ME
                      </span>
                </Link>
                <Link to="/projects" activeclassname="active">
                  <span>
                    PROJECTS
                      </span>
                </Link>
                <Link to="/contactMe" activeclassname="active">
                  <span>
                    CONTACT
                      </span>
                </Link>
              </div>
            </nav>
          );
    }
}

export default Header;
