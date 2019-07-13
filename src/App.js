import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { News, Category } from "./scenes";
import { Header } from "./components";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={News} />
        <Route path="/category/:category" exact component={Category} />
      </Switch>
    </Router>
  );
}

export default App;
