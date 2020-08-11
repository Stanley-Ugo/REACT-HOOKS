import React, { useState } from "react";

const App = ({ initialCount }) => {
  let [count, setCount] = useState(initialCount);
  let [posts, setPosts] = useState([
    {
      name: "Super awesome hooks",
      body: "Everything is awesome when you are part of a team",
    },
  ]);

  const addOne = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  const restOne = () => {
    setCount((prevCount) => {
      return prevCount - 1;
    });
  };

  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={addOne}>Add one +</button>
      <button onClick={restOne}>Rest one -</button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <hr />
      {posts.map((item, i) => (
        <div key={i}>
          <div>Name: {item.name}</div>
          <div>Body: {item.body}</div>
        </div>
      ))}
    </>
  );
};

export default App;
