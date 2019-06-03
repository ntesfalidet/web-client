// System
import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Local
import LandingPage from "./containers/LandingPage";
import Summary from "./containers/Summary";
import PythonStats from "./containers/PythonStats";
import HeaderBar from "./components/app/HeaderBar";
import { Locations } from "./constants";

class App extends Component {
  constructor() {
    super();

    this.state = {
      username: ""
    };
  }

  // Render

  renderDefaultLayout(Component, componentProps) {
    // TODO: Get prop values for HeaderBar from state
    const navOptions = [
      "Summary",
      "Python (60%)",
      "Javascript (10%)",
      "C++ (10%)",
      "Java (20%)"
    ];

    return (
      <Fragment>
        <HeaderBar
          avatarURL="https://avatars2.githubusercontent.com/u/18684735?s=460&v=4"
          fullName="Jonathan Shobrook"
          githubURL="github.com/shobrook"
          topProfile={false}
        >
          {navOptions.map(option => {
            return (
              <Link to={`/${"python" /*option.toLowerCase()*/}`}>{option}</Link>
            );
          })}
        </HeaderBar>
        <Component {...componentProps} />
      </Fragment>
    );
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path={Locations.landing} component={LandingPage} />
          <Route
            path={Locations.summary}
            render={() => this.renderDefaultLayout(Summary, {})}
          />
          <Route
            path={Locations.python}
            render={() => this.renderDefaultLayout(PythonStats, {})}
          />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("index"));
