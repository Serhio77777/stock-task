import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/configureStore';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import StockPageContainer from './stockPageContainer';
import Home from './homeContainer';
import Profile from './profileContainer';
import AddNewStock from './addNewStockContainer';
import Login from './loginContainer';
import Registration from './registrationContainer';
import AddNewStatement from './addStatementContainer';
import Statement from './statementContainer';

export default () => (
  <Router>
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Stock System Control</Navbar.Brand>
        <Nav className="mr-auto">
          <Link style={{ color: '#aeacac', margin: '5px' }} to="/">Home</Link>
          <Link style={{ color: '#aeacac', margin: '5px' }} to="/profile">Profile</Link>
          <Link style={{ color: '#aeacac', margin: '5px' }} to="/statement">Statements</Link>
          {/* <Nav.Link style={{color: '#aeacac'}}>Log out</Nav.Link> */}
        </Nav>
      </Navbar>

      <Switch>
        <Route path="/stock/:id">
          <Provider store={store}>
            <StockPageContainer />
          </Provider>
        </Route>
        <Route path="/profile">
          <Provider store={store}>
            <Profile />
          </Provider>
        </Route>
        <Route path="/add-new-stock">
          <Provider store={store}>
            <AddNewStock />
          </Provider>
        </Route>
        <Route path="/statement">
          <Provider store={store}>
            <Statement />
          </Provider>
        </Route>
        <Route path="/statement">
          <Provider store={store}>
            <AddNewStatement />
          </Provider>
        </Route>
        <Route path="/login">
          <Provider store={store}>
            <Login />
          </Provider>
        </Route>
        <Route path="/registration">
          <Provider store={store}>
            <Registration />
          </Provider>
        </Route>
        <Route path="/">
          <Provider store={store}>
            <Home />
          </Provider>
        </Route>
      </Switch>
    </div>
  </Router>
);
