import React from 'react';

function SpecialsCard(props) {
  return (
    <div className="specials-card">
        <div>{props.dish}</div>
        <div>{props.description}</div>
    </div>
  )
}

export default SpecialsCard;