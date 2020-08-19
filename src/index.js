import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import Form from "./components/editForm";

// import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import PropertyList from "./components/Properties";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={PropertyList} />
        <Route exact path="/properties/:id" component={Form} />
        {/* The line below is from App.js I have commmented out hte call to App.js as not necessary */}
        <PropertyList />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
