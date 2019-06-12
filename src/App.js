import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from "./components/Home/Home";
import AboutMe from "./components/About-Me/About-Me";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/Contact-Me/Contact-Me";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };

    this.setState = this.setState.bind(this);

    setTimeout(() => {
      this.setState({ loading: false })
    }, 4000)
  }

  render() {
      return (
        <BrowserRouter>
        <div className="h100 container-fluid pd0">
          {/* <Header /> */}
          <Route className="h100" render={(location) => (
            <TransitionGroup>
              <CSSTransition timeout={100000} classNames="fade" key={location.key}>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/home" component={Home} />
                  <Route path="/about" component={AboutMe} />
                  <Route path="/projects" component={Projects} />
                  <Route path="/contactMe" component={ContactMe} />
                  {/* <Route path="/portfolio" component={PortfolioPage} />
                  <Route component={PageNotFound} /> */}
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />
        </div>
        </BrowserRouter>
      )
  }
}

export default App;
