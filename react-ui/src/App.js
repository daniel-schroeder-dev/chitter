import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import PageTitleBar from './components/PageTitleBar/PageTitleBar';
import TabBar from './components/TabBar/TabBar';

import './App.css';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/*">
          <PageTitleBar />
          <TabBar />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
