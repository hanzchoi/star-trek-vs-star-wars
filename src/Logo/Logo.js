import React from 'react';
import logo from '../img/logo.svg'
import './Logo.css';

const Logo = () => {
  //console.log(logo)
  return (
    <img className="logo" src={logo} alt="" />
  )
}

export default Logo;

// <section className="logo">
// </section>


// const switchToLogo = () => {
//   history.push('logo')
// }
//
// setTimeout(switchToLogo, 7000);
