import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "../components/Homepage";
import Form from "../components/Form/Form";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/new-poll">
            <Form />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
