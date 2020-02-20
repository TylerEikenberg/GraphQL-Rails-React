import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { UserAvatar, Posts } from '../';

const GET_USER = gql`
  query User($id: ID!) {
    user(id: $id) {
      posts {
        id
        title
      }
    }
  }
`;

function User({ user, selectUser }) {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id: user.id }
  });

  if (loading) return 'Loading...';
  if (error) return `Error ${error.message}`;

  return (
    <>
      <div>
        <button onClick={selectUser}>Back</button>
      </div>
      <div>
        <div>
          <UserAvatar user={user} />
        </div>
        <div>
          <Posts posts={data.user.posts} user={user} />
        </div>
      </div>
    </>
  );
}

export default User;
