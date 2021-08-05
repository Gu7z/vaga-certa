import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login, Register } from "components";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
