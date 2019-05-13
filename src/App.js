import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StarWarsOpening from './StarWarsOpening/StarWarsOpening';

import TitleContainer from './TitleContainer/TitleContainer';
import ChoiceContainer from './ChoiceContainer/ChoiceContainer';
import HomeContainer from './HomeContainer/HomeContainer';
import Logo from './Logo/Logo';
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
      <Router>
        <React.Fragment>
          <Route exact path="/" render={(props) => <HomeContainer {...props}/>} />
          <Route exact path="/logo" render={(props) => <Logo {...props}/>} />
          <Route exact path="/home" render={ChoiceContainer} />
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;
