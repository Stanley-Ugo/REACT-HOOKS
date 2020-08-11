import React,{ useReducer } from "react";


const ReducerComp = ({ initialCount }) => {
  
function reducer(state,action){
    switch(action.type){
        default:
            throw new Error();
    }
}

  return (
    <>
      <h3>Count: 0</h3>
      <button >Add one +</button>
      <button >Rest one -</button>
      <button >Reset</button>
      
    </>
  );
};

export default ReducerComp;
