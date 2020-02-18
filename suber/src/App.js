import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./Home";
import Tour from "./Tour";
import Tourguide from "./Tourguide"

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/tour" component={Tour} />
      <Route path="/tourguide" component={Tourguide} />
    </HashRouter>
  );
}

export default App;