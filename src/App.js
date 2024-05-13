import React, { useState, useEffect } from "react";
import userData from "./celebrities.json";
import UserList from "./component/Userlist";
import SearchBar from "./component/SearchBar";

function Home() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editedUserId, setEditedUserId] = useState(null);

  useEffect(() => {
    setUsers(userData);
  }, []);

  const filteredUsers = users.filter((user) =>
    `${user.first} ${user.last}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const handleAccordionToggle = (id) => {
    setEditedUserId(editedUserId === id ? null : id);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleEditUser = (userId) => {
    setEditedUserId(userId);
  };

  const handleSaveUser = (editedUser) => {
    const index = users.findIndex((user) => user.id === editedUser.id);
    if (index !== -1) {
      const updatedUsers = [...users];
      updatedUsers[index] = editedUser;
      setUsers(updatedUsers);
    }
    setEditedUserId(null);
  };

  const handleDeleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  const handleCancelEdit = () => {
    setEditedUserId(null);
  };

  return (
    <main className="flex items-center justify-center h-screen">
      <div className="m-auto">
        <SearchBar handleSearch={handleSearch} />
        <UserList
          users={filteredUsers}
          onAccordionToggle={handleAccordionToggle}
          onDeleteUser={handleDeleteUser}
          onEditUser={handleEditUser}
          onSaveUser={handleSaveUser}
        />
      </div>
    </main>
  );
}

export default Home;
