import React from 'react'
import "../styles/index.css";
import { CardSection } from './CardSection';
export const Index = ({selectPages}) => {
  return (
    <div className='contPpal'>
      <h3 className='titles'>Pupular Titles</h3>
      <div className='allCards'>
        <CardSection title="SERIES" description="Popular Series" pagesId={1} selectPages={selectPages}/>
        <CardSection title="MOVIES" description="Popular Movies" pagesId={2} selectPages={selectPages}/>
        
      </div>
    </div>
  )
}
