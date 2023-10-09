import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from '../components/post';
import { useNavigate } from 'react-router-dom'; // Import the hook

function Home({ userId }) {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate(); // Get the navigate function

  useEffect(() => {
    // Check if userId is not available, and redirect to /login if not logged in
    if (!userId) {
      navigate('/login');
    } else {
      const apiUrl = 'http://localhost:3000/posts';

      axios
        .get(apiUrl)
        .then((response) => {
          setPosts(response.data.posts);
        })
        .catch((error) => {
          console.error('Error fetching the data:', error);
        });
    }
  }, [userId, navigate]); // Add userId and navigate as dependencies

  const renderedPosts = posts.map((post, index) => (
    <div className='col' key={index}>
      <Post post={post}></Post>
    </div>
  ));

  return (
    <div className='container'>
      <div className='row'>{renderedPosts}</div>
    </div>
  );
}

export default Home;
