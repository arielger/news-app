import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { News, Category } from "./scenes";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={News} />
        <Route
          path="/category/:category"
          render={({ match }) => <Category match={match} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
