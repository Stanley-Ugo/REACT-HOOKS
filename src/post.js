import React, { useEffect } from 'react';

const Post = ({item}) => {

    return(
        <div>
          <hr />
          <div>Name: {item.name}</div>
          <div>Body: {item.body}</div>
        </div>
    )
}

export default Post;