import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./Home";
import Tour from "./Tour";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={Tour} />
    </HashRouter>
  );
}

export default App;