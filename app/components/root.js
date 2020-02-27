import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { Home } from './home'

export class Root extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Router>
        <div>
          <nav>
            Ch-ch-ch-ch-ch-ch-chaaaanges...!
            <div>
              <Link to ='/'>Home</Link>
            </div>
            <div>
              <Link to='/bowies'>Bowies</Link>
            </div>
          </nav>
          <Switch>
            <Route exact path='/' component={Home}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export const ReduxRoot = connect(null)(Root)
