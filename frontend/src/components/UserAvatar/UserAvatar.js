import React from 'react';
import Gravatar from 'react-gravatar';

function UserAvatar({ user }) {
  return (
    <>
      <Gravatar
        email={user.email}
        size={200}
        className='rounded-full text-center inline'
      ></Gravatar>
      <div>
        <div>{user.name}</div>
        <p>{user.email}</p>
        <p>{user.postsCount}</p>
      </div>
    </>
  );
}

export default UserAvatar;
