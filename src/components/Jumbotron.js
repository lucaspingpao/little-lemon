import React from 'react';
import Button from './Button';
import Food from '../assets/restaurant-food.jpg'

function Jumbotron() {
  return (
    <div className="jumbotron-container">
      <div>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Lorem Ipsum</p>
        <Button label="Reserve Table"/>
      </div>
      <div>
        <img src={Food} alt="Restaurant Food"/>
      </div>
    </div>
  )
}

export default Jumbotron;