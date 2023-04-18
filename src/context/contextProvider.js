import React, { createContext, useState } from 'react'

const AppContext = createContext();

export const ContextProvider = (props) => {
const [state, setState] = useState({loading:false});

  return (
    <>
    <AppContext.Provider value={[state, setState]}>
        {props.children}
    </AppContext.Provider>
    </>
  )
}

export {AppContext};
