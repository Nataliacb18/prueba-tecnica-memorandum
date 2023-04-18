import React from 'react'


export const SeriesView = ({data}) => {

  const filterProgramType = (data, type) => {
    let filteredData = data.entries.filter(elem => elem.programType === type && elem.releaseYear >= 2010 ).sort((a,b) => {
      
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();

        if( titleA < titleB) {
          return -1;
        }
        if( titleA > titleB) {
          return 1;
        }
      return 0;
  })
    return (filteredData);

  }

  const res = filterProgramType(data, "series");
  console.log(res);

  return (
    <div className='contPpal'>
      <h3 className='titles'>Pupular Series</h3>
      <div className='allCardsSeries'>

        
      </div>
    </div>
  )
}