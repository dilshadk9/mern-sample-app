import React from "react";

export default function DisplayUserTable(props) {
  return props.users.length > 0 ? (
    props.users.map((user, i) => {
      return (
        <tr key={i}>
          <td>{user._id}</td>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.email}</td>
          <td>{user.gender}</td>
          <td>{user.dateOfBirth}</td>
        </tr>
      );
    })
  ) : (
    <tr>
      <td colSpan="6" className="text-center">
        No users found.
      </td>
    </tr>
  );
}
