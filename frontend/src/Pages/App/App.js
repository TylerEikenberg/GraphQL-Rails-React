import React, { useState } from '../../../node_modules/react';
import './App.css';
import { Users } from '../../components';

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  const selectUser = user => {
    setSelectedUser(user);
  };

  return (
    <div className='App'>
      {selectedUser ? (
        <User user={selectUser} selectUser={selectedUser} />
      ) : (
        <Users selectUser={selectedUser} />
      )}
    </div>
  );
}

export default App;
