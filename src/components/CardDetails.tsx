import React from 'react';
import '../assets/css/style.css';

interface CardDetailsProps {
  pic: string;
  description: string;
  text1: string;
  text2: string;
}

const CardDetails: React.FC<CardDetailsProps> = (props) => {
  return (
        <div className='card2'>
            <div className='CardTop'>
                <img src={props.pic} alt={props.description}/>
            </div>
            <div className='CardBottom'>
                <p className='First'>{props.text1}</p>
                <p>{props.text2}</p>
            </div>
        </div> 
  );
};

export default CardDetails;