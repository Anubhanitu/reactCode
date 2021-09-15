import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import First from "./First";
import Second from "./Second";

const App = () => {
  return (
    <Router>
      <div> hi
        <li>
          <Link to='/'> First </Link>
        </li>
        <li>
          <Link to='/Second'> Second </Link>
        </li>

        <Switch>
          <Route exact path='/' component={First} />
          <Route path='/second' component={Second} />
          {/* <Route path='/' component={Error} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
