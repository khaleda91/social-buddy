import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {

  const [post, setPosts] = useState([]);
  useEffect(() => {
      const url = `https://jsonplaceholder.typicode.com/posts`
      fetch(url)
      .then(res => res.json())
      .then(data => setPosts(data))
  },[])

    return (
        <div>
            <h2> this is home</h2>
            <h3>{post.length}</h3>
            {
                post.map(post => <Post post={post}></Post>)
            }
        </div>
    );
};

export default Home;