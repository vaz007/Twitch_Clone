import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";

import Header from "./Header";

export class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/">
                <StreamList />
              </Route>
              <Route exact path="/streams/new">
                <StreamCreate />
              </Route>
              <Route exact path="/streams/edit">
                <StreamEdit />
              </Route>
              <Route exact path="/streams/delete">
                <StreamDelete />
              </Route>
              <Route exact path="/streams/show">
                <StreamShow />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
