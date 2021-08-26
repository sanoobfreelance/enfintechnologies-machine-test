import React from "react";

import Dashboard from "./Pages/Dashboard";
import { Route, Switch } from "react-router-dom";
import CreateTask from "./Pages/CreateTask";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/creation">
          <CreateTask />
        </Route>
      </Switch>
    </>
  );
}

export default App;
