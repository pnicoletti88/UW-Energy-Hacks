import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./Containers/Home/Home";
import TempPage from "./Containers/TempPage/TempPage";
import Single from "./Containers/Single/Single";


const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/:deleteMe" component={TempPage} />
      <Route path="/:name" component={Single} />
    </Switch>
  </Router>
);

export default App;
