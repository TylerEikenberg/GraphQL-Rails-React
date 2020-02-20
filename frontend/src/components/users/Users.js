import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import './Users.css';
import { UserAvatar } from '../';

const GET_USERS = gql`
  {
    users {
      id
      name
      email
      postCount
    }
  }
`;

function Users({ selectUser }) {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return 'Loading...';
  if (error) return `Error ${error.message}`;

  return (
    <div>
      {data.users.map(user => (
        <div key={user.id} onClick={selectUser}>
          <UserAvatar user={user} />
        </div>
      ))}
    </div>
  );
}

export default Users;
