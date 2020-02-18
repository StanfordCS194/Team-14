import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Tour from './components/Tour/Tour';
import Tourguide from './components/Tourguide/Tourguide'

function App() {
  return (
    <HashRouter>
      <Route path='/' exact={true} component={Home} />
      <Route path='/tour' component={Tour} />
      <Route path='/tourguide' component={Tourguide} />
    </HashRouter>
  );
}

export default App;