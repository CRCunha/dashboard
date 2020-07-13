import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "../components/navBar";

import Home from "../pages/home";
import Line from "../pages/line";
import Choice from "../pages/choice";
import Other from "../pages/others";
import Users from "../pages/users";
import Login from "../pages/login";
import Cards from "../pages/cards";

import "./mobile.css";

const Routes = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Line" exact component={Line} />
      <Route path="/Choice" exact component={Choice} />
      <Route path="/Users" exact component={Users} />
      <Route path="/other" component={Other} />
      <Route path="/cards" component={Cards} />
      <Route path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
