import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login, Register } from "components";
import AllocateVacancy from "components/pages/allocate_vacancy";

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
        <Route path="/alocar-vaga">
          <AllocateVacancy />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
