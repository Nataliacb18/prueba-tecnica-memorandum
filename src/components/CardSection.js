import React from 'react'
import "../styles/cardSection.css";
import { useNavigate } from 'react-router-dom';

export const CardSection = ({title, description, path}) => {
  const navigate = useNavigate();
  return (
    <div className='cardPrincipal' onClick={()=> navigate(path)}>
      <div  className='cardimg'>
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  )
}

