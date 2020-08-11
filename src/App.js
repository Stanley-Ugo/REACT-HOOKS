import React, { useState } from 'react';


const App = () =>  {

  let [count, setCount] = useState(0);

  const addOne = () =>{
    setCount(count + 1)
  }

  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={addOne}>Add one +</button>
    </>
  );
}

export default App;
