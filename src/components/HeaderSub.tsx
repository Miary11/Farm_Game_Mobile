import React from 'react';
import '../assets/css/style.css';

interface HeaderSubProps {
  logo: string;
  description: string;
}

const HeaderSub: React.FC<HeaderSubProps> = (props) => {
  return (
    <header className='header1'>
        <div className="MidTop">
          <img src={props.logo} alt={props.description} />
        </div>
    </header>
  );
};


export default HeaderSub;