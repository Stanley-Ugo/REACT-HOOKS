import React, { useState, useEffect } from "react";

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

  const addOnePost = () => {
    let newPost = {
      name: "Super awesome hooks volume 2",
      body: "Everything is awesome when you are part of a team that ain't light headed"
    };

    setPosts([
      ...posts,
      newPost
    ])
  }

  useEffect(() => {
    console.log(count)
  }, [count])

  useEffect(() => {
    console.log('Posts')
  }, [posts])

  useEffect(() => {
    console.log("Mounted")
  }, [])

  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={addOne}>Add one +</button>
      <button onClick={restOne}>Rest one -</button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      
      {posts.map((item, i) => (
        <div key={i}>
          <hr />
          <div>Name: {item.name}</div>
          <div>Body: {item.body}</div>
        </div>
      ))}

      <button onClick={addOnePost}>Add one more Post</button>
    </>
  );
};

export default App;
