import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PageTitleBar from './components/PageTitleBar/PageTitleBar';

import './App.css';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/*">
          <PageTitleBar />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
