import React from "react";
import "./App.css";
import data from "./json/data.json";
import PropertyList from "./components/Properties";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <PropertyList />
          </li>
          <li>{/* <Link to="/about">About</Link> */}</li>
          <li>
            <Link to="/properties"> Property </Link>
          </li>
        </ul>

        <Switch>
          {/* <Route path="/about">
            <About /> */}
          {/* </Route> */}
          <Route path="/properties">
            <Properties />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Listings </h2>;
}

// function About() {
//   return <h2>About</h2>;
// }

function Properties() {
  let match = useRouteMatch();

  return (
    <div>
      <h2> Details </h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Property />
        </Route>
        <Route path={match.path}>
          <h3>Please select a Property.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Property() {
  let { topicId } = useParams();
  return <h3>Requested Property ID: {topicId}</h3>;
}
