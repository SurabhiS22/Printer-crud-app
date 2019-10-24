import React from 'react'

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th></th>
        <th>IP</th>
        <th></th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td></td>
            <td>{user.name}</td>
            <td></td>
            <td>{user.IP}</td>
            <td></td>
            <td>{user.Status}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable