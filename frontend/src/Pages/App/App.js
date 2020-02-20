import React, { useState } from '../../../node_modules/react';
import './App.css';
import { Users, User } from '../../components';

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  const selectUser = user => {
    setSelectedUser(user);
  };

  return (
    <div className='App'>
      {selectedUser ? (
        <User user={selectedUser} selectUser={selectUser} />
      ) : (
        <Users selectUser={selectUser} />
      )}
    </div>
  );
}

export default App;
