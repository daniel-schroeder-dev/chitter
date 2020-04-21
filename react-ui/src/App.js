import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PageTitleBar from './components/PageTitleBar/PageTitleBar';
import TabBar from './components/TabBar/TabBar';

import './App.css';

function App() {
  return (
    <div className="app">
      <Route path="/*">
        <PageTitleBar />
        <TabBar />
      </Route>

    </div>
  );
}

export default App;
