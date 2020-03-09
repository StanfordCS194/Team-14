import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Tour from './components/Tour/Tour';
import Tourguide from './components/Tourguide/Tourguide';
import Tourconfirmation from './components/Tourconfirmation/Tourconfirmation';
import Register from './components/Register/Register';
import RegisterPW from './components/RegisterPW/RegisterPW';
import GuideSetup from './components/GuideSetup/GuideSetup';
import Search from './components/Search/Search';

import Searchconfirmation from './components/Searchconfirmation/Searchconfirmation';
import Welcome from './components/Welcome/Welcome';
import Cancel from './components/Cancel/Cancel';
import Cancelconfirmation from './components/Cancelconfirmation/Cancelconfirmation';
import Tourguideconfirmation from './components/Tourguideconfirmation/Tourguideconfirmation';
import Login from './components/Login/Login';
import Loggedin from './components/Loggedin/Loggedin';
import UpdateAvailability from './components/UpdateAvailability/UpdateAvailability';
import ViewReservation from './components/ViewReservation/ViewReservation';


// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Route path='/' exact={true} component={Home} />
        <Route path='/tour' component={Tour} />
        <Route path='/tourguide' component={Tourguide} />
        <Route path='/reservation/confirmation' component={Tourguideconfirmation} />
        <Route path='/confirmation' component={Tourconfirmation} />
        <Route path='/register' component={Register} />
        <Route path='/registerpw' component={RegisterPW} />
        <Route path='/guidesetup' component={GuideSetup} />
        <Route path='/search' exact={true} component={Search} />
        <Route path='/search/confirmation' component={Searchconfirmation} />
        <Route path='/welcome' component={Welcome} />
        <Route path='/cancel' exact={true} component={Cancel} />
        <Route path='/cancel/confirmation' component={Cancelconfirmation} />
        <Route path='/login' component={Login} />
        <Route path='/loggedin' component={Loggedin} />
        <Route path='/updateavailability' component={UpdateAvailability} />
        <Route path='/viewreservation' component={ViewReservation} />
      </HashRouter>
    </Provider>
  );
}

export default App;
