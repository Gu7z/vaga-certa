import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Login, Register, RegisterPlate, AllocateVacancy } from "components";

const loggedIn = false;

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {loggedIn ? <Redirect to="/alocar-vaga" /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/alocar-vaga" exact>
          <AllocateVacancy />
        </Route>
        <Route path="/registrar-placa" exact>
          <RegisterPlate />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
