import React from 'react';
import '../assets/css/style.css';
import Button from '../components/Button';
import {deconnexion} from '../assets/js/Function';

interface HeaderProps {
  logo: string;
  description: string;
  lien?: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header className='header2'>
        <div className="LeftTop">
          <a href={props.lien}><img src={props.logo} alt={props.description} /></a>
        </div>
        <div className='RightTop'>
            <Button text='Se déconnecter' onClick={deconnexion}/>
        </div>
    </header>
  );
};


export default Header;