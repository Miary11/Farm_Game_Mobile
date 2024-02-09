import React from 'react';
import '../assets/css/style.css';

interface FooterProps {
  copyright: string;
  id? : string;
}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <footer className='footer' id={props.id}>
      <p>{props.copyright}</p>
    </footer>
  );
};

export default Footer;