import React, { Component } from 'react';
import { Route,Switch } from "react-router-dom";
import Article from './article';
import Home from './Home';

class App extends Component {
  render() {
    return (
        <Switch> 
          <Route path="/" exact component={Home} />
          <Route path="/:id" exact component={Article} />
        </Switch>
    )
  }
}

export default App;
