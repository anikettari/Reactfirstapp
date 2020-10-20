import React from "react";
import UserTableRow from "./UserTableRow";

const UserTable = props => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map(userValue => (
            <UserTableRow
              key={userValue.id}
              userValue={userValue}
              users={props.users}
              editRow={props.editRow}
              deleteUser={props.deleteUser}
              editing={props.editing}
              setEditing={props.setEditing}
              currentUser={props.currentUser}
              updateUser={props.updateUser}
            />
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
