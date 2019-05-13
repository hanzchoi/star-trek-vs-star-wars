import React from 'react';
import './HomeContainer';
import TitleContainer from '../TitleContainer/TitleContainer';
import ChoiceContainer from '../ChoiceContainer/ChoiceContainer';

const HomeContainer = () => {
  return(
    <div className="home-container">
      <TitleContainer/>
      <ChoiceContainer/>
    </div>
  )
}


export default HomeContainer;
