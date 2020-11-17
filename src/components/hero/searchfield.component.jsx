import React from 'react';
import "./hero.styles.css";

export const Searchfield = props => {
  return (
    <div className='hero-searchfield'>
      <h3>PARKING AT</h3>
      <input type="search"
        placeholder="Where do you want to park?"/>
    </div>
  );
};



