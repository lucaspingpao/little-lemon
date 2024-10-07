import React from 'react';
import TestimonialsCard from './cards/TestimonialsCard';

function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      name: "Alice",
      review: "good"
    },
    {
      rating: 1,
      name: "Bob",
      review: "terrible"
    },
    {
      rating: 3,
      name: "Charlie",
      review: "ok"
    }
  ];

  return (
    <div className="testimonials-container">
      <h1>Testimonials</h1>
      {testimonials.map((testimonial, idx) => {
        return (
          <TestimonialsCard
            key = {idx}
            rating = {testimonial.rating}
            name = {testimonial.name}
            review = {testimonial.review}
          />
        )
      })}
    </div>
  )
}

export default Testimonials;