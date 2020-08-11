import React, { useEffect } from 'react';

const Post = ({item}) => {

    return(
        <div key={i}>
          <hr />
          <div>Name: {item.name}</div>
          <div>Body: {item.body}</div>
        </div>
    )
}