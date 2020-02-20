import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import './Users.css';
import { UserAvatar, CreateUser } from '../';

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

  const updateUsers = (cache, { data: { createUser } }) => {
    const { users } = cache.readQuery({ query: GET_USERS });
    cache.writeQuery({
      query: GET_USERS,
      data: { users: users.concat([createUser.user]) }
    });
  };

  return (
    <div className='Users-container'>
      {data.users.map(user => (
        <div key={user.id} onClick={selectUser.bind(this, user)}>
          <UserAvatar user={user} />
        </div>
      ))}

      <div>
        <CreateUser onCreateUser={updateUsers} />
      </div>
    </div>
  );
}

export default Users;
