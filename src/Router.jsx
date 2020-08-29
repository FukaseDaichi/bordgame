import React from "react";
import { Route, Switch } from "react-router";
import { SignUp, Geschenk, SignIn } from "./templates";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="(/)?" component={Geschenk} />
    </Switch>
  );
};

export default Router;
