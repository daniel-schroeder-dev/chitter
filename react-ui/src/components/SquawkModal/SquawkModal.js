import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import profilePic from '../../fixtures/profile-pic.jpg';

import './SquawkModal.css';

function SquawkModal(props) {

  const history = useHistory();

  return (
    <section className="squawk-modal">
      <div className="squawk-modal__top-bar">
        <FontAwesomeIcon className="squawk-modal__icon" icon={faArrowLeft} onClick={history.goBack} />
        <button className="squawk-modal__squawk-button">Squawk</button>
      </div>
      <div className="squawk-modal__main-content-area">
        <img className="squawk-modal__avatar" src={profilePic} alt="avatar" />
        <textarea className="squawk-modal__text-box" rows="7" placeholder="What's up?"></textarea>
      </div>
    </section>
  );
}

export default SquawkModal;
