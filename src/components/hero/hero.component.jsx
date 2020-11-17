import React from 'react';
import "./hero.styles.css";
import {Searchfield} from './searchfield.component';

export const Hero = () => {
  return (
    <div className='hero-section'>
      <h3>Find Parking in seconds</h3>
      <p>Choose from millions of spaces.
        <br/>Trusted by 3.5 million drivers.
      </p>
      <div className="hero-phone-img">
        <img src="https://static.justpark.com/web/assets/home_phone.207889ab.png" alt="hero mobile" />
      </div>
      <Searchfield/>
    </div>
  );
};

