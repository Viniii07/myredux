import { init } from "../Utils/init";
const nameLocReducer=(state=init, action)=>{
    if(action.type==="NAME"){
        state={...state,name:action.payload};
    }
    if(action.type==="LOC"){
        state={...state,loc:action.loc};
    }
    console.log(state,"updated redux")
    return state;
};

export default nameLocReducer;