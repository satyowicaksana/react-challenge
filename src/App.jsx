import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from './containers/Home'
import Info from './containers/Info'
import { Provider } from 'react-redux'
import store from '../src/store'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/:slug">
            <Info />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
