import React from 'react';
import './StarWarsOpening.css';

const StarWarsOpening = ({history}) => {

  const switchToLogo = () => {
    history.push('home')
  }

  setTimeout(switchToLogo, 7000);

  return (
    <section className="intro">
      A long time ago, in a galaxy far,<br /> far away....
    </section>
  )
}

export default StarWarsOpening;
