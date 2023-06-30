import React, { useState } from 'react'
import { A } from './A'
import { B } from './B'
import { C } from './C'

export const WithoutRedux = () => {
    const [name,setName]=useState("");
    const [loc,setLoc]=useState("")
    const getData=(myName)=>{
        setName(myName);
    }
    const getLoc=(myLoc)=>{
        setLoc(myLoc);
    }
  return (
    <div>
      <h1>Without Redux</h1>
        <A fn={getData}/>
        <B fl={getLoc}/>
        <C name={name} loc={loc}/>
    </div>
  )
}
