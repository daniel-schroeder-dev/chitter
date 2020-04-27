import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';

import './SquawkButton.css';

function SquawkButton(props) {

  const match = useRouteMatch();

  const pageTitle = match.url.split('/').pop()[0].toUpperCase() + match.url.split('/').pop().slice(1);

  return (
    <Link className="squawk-button" to="/compose/squawk" onClick={() => props.handleClick(pageTitle)}><span className="squawk-button__plus">+</span><FontAwesomeIcon className="squawk-button__icon" icon={faFeatherAlt} /></Link>
  );
}

export default SquawkButton;