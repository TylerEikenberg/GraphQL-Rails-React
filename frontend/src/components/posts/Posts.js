import React from 'react';

function Posts({ posts, user }) {
  return (
    <>
      <div>
        <h1>Posts from {user.name}</h1>
      </div>
      {posts.map(post => (
        <div key={post.id}>
          <div>
            <h3>{post.title}</h3>
          </div>
        </div>
      ))}
    </>
  );
}

export default Posts;
