import React, { useState } from "react";
import "./App.css";
import UserForm from "./Components/UserForm";
import UserList from "./Components/UserList";

const App = () => {
  const [users, updateUsers] = useState<IUser[]>([]);
  const handleAddUser = (name: string, email: string) => {
    updateUsers([...users, { name, email }]);
  };
  return (
    <div className='m-0'>
      <UserForm onUserSubmit={handleAddUser} />
      <hr />
      <UserList userList={users} />
    </div>
  );
};

export default App;
