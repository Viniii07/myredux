import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import store from '../../Store/store';

export const AF = () => {
  const nameRef=useRef(null)
  const handleName=()=>{
    let name=nameRef.current.value;
    store.dispatch({
      type:"NAME_F",
      payload:name
    });
  };
  return (
    <div>
        <input ref={nameRef}/>
        <button onClick={handleName}>name</button>
    </div>
  )
}
