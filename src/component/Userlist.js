import React from "react";
import UserListItem from "./UserlistItem";

const UserList = ({
    users,
    onAccordionToggle,
    onDeleteUser,
    onEditUser,
    onSaveUser,
}) => {
    return (
        <div className="user-list pt-5">
            {users.length === 0 ? (
                <p>No data exists.</p>
            ) : (
                users.map((user) => (
                    <UserListItem
                        key={user.id}
                        user={user}
                        onAccordionToggle={onAccordionToggle}
                        onDeleteUser={onDeleteUser}
                        onEditUser={onEditUser}
                        onSaveUser={onSaveUser}
                    />
                ))
            )}
        </div>
    );
};

export default UserList;
