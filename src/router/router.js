import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "../components/navBar";

import Home from "../pages/home";
import Other from "../pages/others";

const Routes = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/other" component={Other} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
