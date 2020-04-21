import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import profilePic from '../../fixtures/profile-pic.jpg';

import './PageTitleBar.css';

function PageTitleBar(props) {

  const match = useRouteMatch();

  const pageTitle = match.params[0][0].toUpperCase() + match.params[0].slice(1);

  return (
    <header className="page-title-bar">
      <img className="page-title-bar__user-avatar" src={profilePic} alt="user" />
      <h1 className="page-title-bar__page-title" >{pageTitle}</h1>
      <div>+</div>
    </header>
  );
}

export default PageTitleBar;
