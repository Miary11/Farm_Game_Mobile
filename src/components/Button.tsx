import React from 'react';
import '../assets/css/style.css';

interface ButtonProps {
  link?: string;
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <a href={props.link} onClick={props.onClick}>
      <button>{props.text}</button>
    </a>
  );
};

export default Button;