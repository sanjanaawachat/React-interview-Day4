import React from 'react'
import { createContext } from 'react'
import ComB from './ComB'

const Store=createContext();
const ComA = () => {
    return(
        <>
    <Store.Provider value={"Hello Guys !!!!!"}>
      <ComB/>
    </Store.Provider>
        </>
    )
}

export default ComA;
export {Store};