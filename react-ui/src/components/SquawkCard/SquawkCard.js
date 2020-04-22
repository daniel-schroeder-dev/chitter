import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faArrowAltCircleUp, faComment } from '@fortawesome/free-regular-svg-icons'

import './SquawkCard.css';

function SquawkCard(props) {
  return (
    <article className="squawk-card">
      <div className="squawk-card__avatar-wrapper">
        <img className="squawk-card__avatar" src={props.avatar} alt="avatar" />
      </div>
      <div className="squawk-card__main-content-area">
        <h3 className="squawk-card__user-name">{props.userName}<span className="squawk-card__handle">@{props.handle}</span><span className="squawk-card__elapsed-time">&#183; {props.elapsedTime}m</span></h3>
        <p>{props.content}</p>
        <div className="squawk-card__icon-wrapper">
          <div>
            <FontAwesomeIcon className="squawk-card__icon" icon={faComment} />
            <span className="squawk-card__meta-num">{props.meta1}</span>
          </div>
          <div>
            <FontAwesomeIcon className="squawk-card__icon" icon={faRetweet} />
            <span className="squawk-card__meta-num">{props.meta2}</span>
          </div>
          <div>
            <FontAwesomeIcon className="squawk-card__icon" icon={faHeart} />
            <span className="squawk-card__meta-num">{props.meta3}</span>
          </div>
          
            <FontAwesomeIcon className="squawk-card__icon" icon={faArrowAltCircleUp} />
        </div>
      </div>
    </article>
  );
}

export default SquawkCard;
