import React from 'react';

import './SquawkCard.css';

function SquawkCard(props) {
  return (
    <article className="squawk-card">
      <img className="squawk-card__avatar" src={props.avatar} alt="avatar" />
      <div className="squawk-card__main-content-area">
        <h3 className="squawk-card__user-name">UserName<span className="squawk-card__handle">@handle</span><span className="squawk-card__elapsed-time">&#183; 3m</span></h3>
        <p>This is a squawk. It has to be less than 140 characters, just like some other sites.</p>
        <div>
          icons
        </div>
      </div>
    </article>
  );
}

export default SquawkCard;
