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
import Edit from "./pages/Edit";

const App = () => {
  return (
    <Router>
      <TemplateDefault>
        <Switch>
          <Route path="/customers/edit/:id">
            <Edit />
          </Route>
          <Route path="/customers/add">
            <CustomersRegister />
          </Route>
          <Route exact path="/customers">
            <Customers />
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
