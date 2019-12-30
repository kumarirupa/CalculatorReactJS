
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

//Store Configuration
import configureStore from '../../store/index';

import './App.scss';

// Pages
import LandingPage from "../LandingPage";
const store = configureStore({});

function App() {
  return (
    <div>
      <main>
      <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </Router>
    </Provider>
      </main>
    </div>
    
  );
}

export default App;
