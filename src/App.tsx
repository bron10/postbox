import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Redirect, Route, withRouter, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import {configureStore} from './store';
import {} from './components/emails/view'
const store = configureStore();

function App() {
  
  //If already login then redirect to dashboard
  return (
    <Provider store={store}>
    <div className="App">
    <BrowserRouter>
      {/* <Router> */}
        <Switch>
          <Route
            exact
            path="/"
            render={props => {
              return <Redirect {...props} to="/login" />;
            }}
          />
          <Route
            exact
            path="/dashboard"
            render={props => {
              return <Redirect {...props} to="/dashboard/inbox/list" />;
            }}
          />
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/dashboard/:emailAction" >
            <Dashboard />
          </Route>
        </Switch>
      {/* </Router> */}
    </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
