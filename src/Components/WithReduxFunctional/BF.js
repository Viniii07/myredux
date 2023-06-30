import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import store from '../../Store/store';

export const BF = () => {
  const locRef=useRef(null);
  const handleLoc=()=>{
    let loc=locRef.current.value;
    store.dispatch({
      type:"LOC_F",
      payload:loc
    })
  };
  return (
    <div>
        <input ref={locRef}/>
        <button onClick={handleLoc}>loc</button>
    </div>
  )
}

