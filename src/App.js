import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";

import Customers from "./pages/Customers";
import Home from "./pages/Home";
import TemplateDefault from "./Template/Default";

const App = () => {
  return (
    <TemplateDefault>
      <Router>
        <Switch>
          <Route path="/customers">
            <Customers />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </TemplateDefault>
  );
};

export default App;
