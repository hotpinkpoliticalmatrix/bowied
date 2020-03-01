import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { Home } from "./home";
import { SingleBowie } from "./SingleBowie";
import AllBowies from "./AllBowies";
import { SingleAlbum } from './SingleAlbum';

export class Root extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div>
          <nav>
            <div className="navSelect">
              <Link to="/">Home</Link>
            </div>
            <div className="navSelect">
              <Link to="/bowies">Bowies</Link>
            </div>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/bowies/:id" component={SingleBowie} />
            <Route exact path='/albums/single/:id' component={SingleAlbum}/>
            <Route exact path='/albums/:id' component={SingleAlbum}/>
            <Route exact path="/bowies" component={AllBowies} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export const ReduxRoot = connect(null)(Root);
