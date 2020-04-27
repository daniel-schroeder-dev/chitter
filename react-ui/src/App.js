import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import PageTitleBar from './components/PageTitleBar/PageTitleBar';
import TabBar from './components/TabBar/TabBar';
import Feed from './components/Feed/Feed';
import SquawkButton from './components/SquawkButton/SquawkButton';
import SquawkModal from './components/SquawkModal/SquawkModal';

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
          <Feed />
          <SquawkButton />
        </Route>
      </Switch>
      <Route path="/compose/squawk">
        <SquawkModal />
      </Route>

    </div>
  );
}

export default App;
