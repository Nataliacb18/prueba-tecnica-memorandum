const sortFilteredData = (data) => {
    let data1 = [...data]
    data1.sort((a,b) => {
      
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
  return data1;
}

const get20First = (data, num) => {
    return data.slice(0, num);
}

const filterProgramType = (data, type) => {
    let filteredData = data.entries.filter(elem => elem.programType === type && elem.releaseYear >= 2010 );
    let sortData = sortFilteredData(filteredData);
    let res = get20First(sortData, 20)
    return (res);

  }

  export {filterProgramType};