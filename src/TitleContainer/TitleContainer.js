import React from 'react';
import './TitleContainer.css';
import poster from '../img/starwar_or_startrek.jpg';

const TitleContainer = () => {

  return (
    <div className="title-container">
      <img src={poster} alt="Star Wars or Star Track img"/>
      <h1>Choose your side</h1>
    </div>
  )
  
}

export default TitleContainer;
