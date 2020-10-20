import React, { useState, useEffect, Fragment } from "react";

const UserTableRow = props => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return props.editing && props.currentUser.id === props.userValue.id ? (
    <Fragment>
      <tr key={props.userValue.id}>
        <td>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
          />
        </td>
        <td>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleInputChange}
          />
        </td>
        <td>
          <button
            onClick={() => props.setEditing(false)}
            className="button muted-button"
          >
            Cancel
          </button>
          <button
            onClick={() => props.updateUser(props.userValue.id, user)}
            className="button muted-button"
          >
            Update
          </button>
        </td>
      </tr>
    </Fragment>
  ) : (
    <Fragment>
      <tr key={props.userValue.id}>
        <td>{props.userValue.name}</td>
        <td>{props.userValue.username}</td>
        <td>
          <button
            onClick={() => {
              props.editRow(props.userValue);
            }}
            className="button muted-button"
          >
            Edit
          </button>
          <button
            onClick={() => props.deleteUser(props.userValue.id)}
            className="button muted-button"
          >
            Delete
          </button>
        </td>
      </tr>
    </Fragment>
  );
};

export default UserTableRow;
