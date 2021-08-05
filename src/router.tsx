import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login } from "components";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
