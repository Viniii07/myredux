import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import store from '../../Store/store'

export const CF = () => {
    const [name,setName]=useState("")
    const [loc,setLoc]=useState("")
    store.subscribe(()=>{
      let myState=store.getState()
      setName(myState?.nameLocC?.nameF)
      setLoc(myState?.nameLocC?.locF)
    })
  return (
    <div>
        <h1>Name:{name}</h1> 
        <h1>Loc:{loc}</h1>
    </div>
  )
}