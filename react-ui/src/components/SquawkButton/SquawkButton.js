import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons'

import './SquawkButton.css';

function SquawkButton(props) {
  return (
    <Link className="squawk-button" to="/compose/squawk"><span className="squawk-button__plus">+</span><FontAwesomeIcon className="squawk-button__icon" icon={faFeatherAlt} /></Link>
  );
}

export default SquawkButton;