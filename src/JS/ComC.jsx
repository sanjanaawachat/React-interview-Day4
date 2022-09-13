import React,{useContext} from 'react'

import {Store} from "./ComA"
const ComC = () => {
    const channelName=useContext(Store);
  return <h1>Good morning,{channelName}</h1>
}

export default ComC