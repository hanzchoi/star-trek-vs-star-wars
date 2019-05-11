import React from 'react';
import ChoiceContainer from './ChoiceContainer/ChoiceContainer';
import TitleContainer from './TitleContainer/TitleContainer';
import './App.css';

const App = () => {
  // Sets the number of stars we wish to display
  const numStars = 100;

  // For every star we want to display
  for (let i = 0; i < numStars; i++) {
    let star = document.createElement("div");
    star.className = "star";
    let xy = getRandomPosition();
    star.style.top = xy[0] + 'px';
    star.style.left = xy[1] + 'px';
    document.body.append(star);
  }

  // Gets random x, y values based on the size of the container
  function getRandomPosition() {
    const y = window.innerWidth;
    const x = window.innerHeight;
    const randomX = Math.floor(Math.random()*x);
    const randomY = Math.floor(Math.random()*y);
    return [randomX,randomY];
  }

  return (
    <div className="App">
      <TitleContainer />
    </div>
  );
}

export default App;
// <ChoiceContainer />
