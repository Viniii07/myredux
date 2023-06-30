import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';

export const B = () => {
  const dispatch=useDispatch()
  const locRef=useRef(null);
  const handleLoc=()=>{
    let loc=locRef.current.value;
    dispatch({
      type:"LOC",
      loc
    })
  };
  return (
    <div>
        <input ref={locRef}/>
        <button onClick={handleLoc}>loc</button>
    </div>
  )
}
