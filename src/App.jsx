import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

//Pages.
import Home from "./pages/Home";

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </HashRouter>
  );
};

export default App;
