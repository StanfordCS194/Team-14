import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Tour from './components/Tour/Tour';
import Tourguide from './components/Tourguide/Tourguide'
import Tourconfirmation from './components/Tourconfirmation/Tourconfirmation'
import Register from './components/Register/Register'


function App() {
  return (
    <HashRouter>
      <Route path='/' exact={true} component={Home} />
      <Route path='/tour' component={Tour} />
      <Route path='/tourguide' component={Tourguide} />
      <Route path='/confirmation' component={Tourconfirmation} />
      <Route path='/register' component={Register} />
    </HashRouter>
  );
}

export default App;