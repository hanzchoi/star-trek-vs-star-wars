import React from 'react';
import './TitleContainer.css';
import poster from '../img/starwar_or_startrek.jpg';
const TitleContainer = () => {
  return (
    <div className="container">
      <img src={poster} alt="test"/>
      <h1>Choose your side</h1>
    </div>
  )
}

export default TitleContainer;
