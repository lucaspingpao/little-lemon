import React from 'react';

function TestimonialsCard(props) {
  return (
    <div className="testimonials-card">
        <h2>Rating: {props.rating} / 5 stars</h2>
        <h2>{props.name}</h2>
        <p>{props.review}</p>
    </div>
  )
}

export default TestimonialsCard;