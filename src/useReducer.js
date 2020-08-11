import React,{ useReducer } from "react";


function reducer(state,action){
    switch(action.type){
        case 'increment':
            return { count: state.count + 1 }
        default:
            throw new Error();
    }
}

const ReducerComp = ({ initialCount }) => {

    const initialState = {count: initialCount}
  
    const [state,dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h3>Count: {state.count}</h3>
      <button onClick={()=> dispatch({ type: 'increment'})}>Add one +</button>
      <button >Rest one -</button>
      <button >Reset</button>
      
    </>
  );
};

export default ReducerComp;
