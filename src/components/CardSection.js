import React from 'react'
import "../styles/cardSection.css";

export const CardSection = ({title, description, selectPages, pagesId}) => {
  return (
    <div className='cardPrincipal' onClick={()=> selectPages(pagesId)}>
      <div  className='cardimg'>
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  )
}

