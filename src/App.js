import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";

import Customers from "./pages/Customers";
import CustomersRegister from "./pages/CustomersRegister";
import Home from "./pages/Home";
import TemplateDefault from "./Template/Default";

const App = () => {
  return (
    <Router>
      <TemplateDefault>
        <Switch>
          <Route exact path="/customers">
            <Customers />
          </Route>
          <Route path="/customers/add">
            <CustomersRegister />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </TemplateDefault>
    </Router>
  );
};

export default App;
