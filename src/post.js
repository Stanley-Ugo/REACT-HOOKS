import React, { useEffect } from 'react';

const Post = ({item}) => {

    useEffect(() => {
        console.log('Post Mounted/created')

        return () => {
            console.log('component Exit')
        }
    }, [])

    return(
        <div>
          <hr />
          <div>Name: {item.name}</div>
          <div>Body: {item.body}</div>
        </div>
    )
}

export default Post;