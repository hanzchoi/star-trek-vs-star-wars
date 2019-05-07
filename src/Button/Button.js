import React from 'react';
import './Button.css';

const Button = ({title, count, selected, buttonHandler}) => {
  return (
    <button
      className={`button ${selected}`}
      onClick={() => buttonHandler(title)}>
      {title} | {count}
    </button>
  )
}

export default Button;
