import React, { useState } from 'react';
import UserTable  from './tables/UserTable';

function App() {
  const usersData = [
    {id: 1, name:'Ramses', userName:'RanchiGB'},
    {id: 2, name:'Carlos', userName:'Carlitosrojas'},
    {id: 3, name:'Andrea', userName:'Dreacreazz'},
  ]

  const [users, setUsers] = useState(usersData);

  return (
    <div className='container'>
      <h1>CRUD App with Hooks</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          <h2>Add user</h2>
        </div>
        <div className='flex-large'>
          <h2>View users</h2>
          <UserTable users={users}/>
        </div>
      </div>
    </div>
  );
}

export default App;
