import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import './PageTitleBar.css';

function PageTitleBar(props) {

  const match = useRouteMatch();

  return (
    <header>
      <img src="" alt="" />
      {match.params[0]}
    </header>
  );
}

export default PageTitleBar;
