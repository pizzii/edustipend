import React from 'react';
import '../Styles/Button.css';

const Button = ({ text, color, textColor }) => {
  return (
    <>
      <button
        className='btn'
        onClick={(e) => {
          e.preventDefault();
        }}
        style={{ backgroundColor: color, color: textColor }}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
