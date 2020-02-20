import React from 'react';
import Gravatar from '../../../node_modules/react-gravatar';
import './UserAvatar.css';

function UserAvatar({ user }) {
  return (
    <>
      <div className='Gravatar-container'>
        <Gravatar email={user.email} size={200}></Gravatar>
      </div>
      <div>
        <div>{user.name}</div>
        <p>{user.email}</p>
        <p>{user.postCount}</p>
      </div>
    </>
  );
}

export default UserAvatar;
