
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

//Store Configuration
import configureStore from '../../store/index';

import './App.scss';

// Pages
import Login from "../Login/Loadable";
import Registration from "../Registration/Loadable";
import Chat from "../Chat";
import LandingPage from "../LandingPage";
import Notfound from "../NotFound";

const store = configureStore({});

function App() {
  return (
    <div>
      <main>
      <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route path="/chat" component={Chat} />
          <Route path="/register" component={Registration} />
          <Route component={Notfound} />
        </Switch>
      </Router>
    </Provider>
      </main>
    </div>
    
  );
}

export default App;
