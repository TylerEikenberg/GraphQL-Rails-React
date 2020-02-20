import React, { useState } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!) {
    createUser(input: { name: $name, email: $email }) {
      user {
        id
        name
        email
        postCount
      }
      errors
    }
  }
`;

function CreateUser({ onCreateUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const onSubmit = (e, createUser) => {
    e.preventDefault();
    createUser({ variables: { name, email } });
    setName('');
    setEmail('');
  };
  return (
    <div>
      <Mutation mutation={CREATE_USER} update={onCreateUser}>
        {createUserMutation => (
          <div>
            <form onSubmit={e => onSubmit(e, createUserMutation)}>
              <label>Create New User</label>
              <input
                type='text'
                placeholder='name'
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <input
                type='text'
                placeholder='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <input type='submit' placeholder='Create User' />
            </form>
          </div>
        )}
      </Mutation>
    </div>
  );
}

export default CreateUser;
