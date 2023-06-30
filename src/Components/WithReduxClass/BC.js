import React, { Component, createRef } from 'react';
import store from '../../Store/store';

export default class BC extends Component {
    constructor(){
        super()
        this.locRef=createRef(null)
    }
   handleLoc=()=>{
    let loc=this.locRef.current.value;
    store.dispatch({
        type:"LOC_C",
        payload:loc
    })
   }
  render() {
    return (
      <div>
        <input ref={this.locRef}/>
        <button onClick={this.handleLoc}>Loc</button>
      </div>
    )
  }
}
