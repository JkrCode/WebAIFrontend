import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://localhost:3000/posts';

    axios.get(apiUrl)
      .then(response => {
        setPosts(response.data.posts);
      })
      .catch(error => {
        console.error('Fehler beim Laden der Daten:', error);
      });
  }, []);

  const renderedPosts = posts.map((post, index) => (
      <li key={index}>{post.text}</li>
  ))

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {renderedPosts}
      </ul>
    </div>
  );
}

export default Home;
