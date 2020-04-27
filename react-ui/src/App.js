import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import PageTitleBar from './components/PageTitleBar/PageTitleBar';
import TabBar from './components/TabBar/TabBar';
import Feed from './components/Feed/Feed';
import SquawkButton from './components/SquawkButton/SquawkButton';
import SquawkModal from './components/SquawkModal/SquawkModal';
import Overlay from './components/Overlay/Overlay';

import './App.css';

class App extends React.Component {

  state = {
    pageTitle: null,
  };

  handleClick = pageTitle => {
    this.setState({ pageTitle })
  };

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/*">
            <PageTitleBar pageTitle={this.state.pageTitle} />
            <TabBar />
            <Feed />
            <SquawkButton handleClick={this.handleClick} />
          </Route>
        </Switch>
        <Route path="/compose/squawk">
          <SquawkModal />
          <Overlay />
        </Route>
      </div>
    );
  }
}

export default App;
