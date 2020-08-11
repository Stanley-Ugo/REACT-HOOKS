import React, { useState } from 'react';


const App = ({initialCount}) =>  {

  let [count, setCount] = useState(initialCount);

  const addOne = () =>{
    setCount( prevCount => {
      return prevCount + 1
    })
  }

  const restOne = () =>{
    setCount( prevCount => {
      return prevCount - 1
    })
  }

  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={addOne}>Add one +</button>
      <button onClick={restOne}>Rest one -</button>
      <button onClick={()=> setCount(0)}>Reset</button>
    </>
  );
}

export default App;
