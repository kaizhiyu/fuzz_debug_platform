import React from 'react';
import './App.css';
import { Menu } from 'antd';

import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Home';
import 'antd/dist/antd.css';
import SQLFuzz from './SQLFuzz';
import SQLDebug from './SQLDebug';
import SQLDebug2 from './SQLDebug_2';

function App() {
  return (
    <Router>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link to="/">
            HOME
          </Link>
        </Menu.Item>

        <Menu.Item key="fuzz">
          <Link to="/sqlfuzz">
            SQL_FUZZ
          </Link>
        </Menu.Item>

        <Menu.Item key="debug">
          <Link to="/sqldebug_2">
            SQL_DEBUG
          </Link>
        </Menu.Item>

      </Menu>

      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/sqlfuzz">
          <SQLFuzz />
        </Route>
        <Route path="/sqldebug_2">
          <SQLDebug2 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;