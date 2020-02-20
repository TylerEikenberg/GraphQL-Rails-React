import React from 'react';
import './Posts.css';

function Posts({ posts, user }) {
  return (
    <>
      <div>
        <h1>Posts from {user.name}</h1>
      </div>
      {posts.map(post => (
        <div className='Post-container' key={post.id}>
          <div>
            <h3>{post.title}</h3>
          </div>
        </div>
      ))}
    </>
  );
}

export default Posts;
