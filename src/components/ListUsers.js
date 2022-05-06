import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import DisplayUserTable from "./DisplayUserTable";

export default function ListUsers(props) {
  return (
    <div>
      <div className="mx-auto mt-3">
        <table className="table table-striped container" width="50%">
          <tbody>
            <tr>
              <th colSpan="6" className="text-center">
                <h4>List Users</h4>
              </th>
            </tr>
            <tr>
              <td>ID</td>
              <td>Firstname</td>
              <td>Lastname</td>
              <td>Email</td>
              <td>Gender</td>
              <td>Date of Birth</td>
            </tr>
            <DisplayUserTable users={props.item.users} />
          </tbody>
        </table>
      </div>
    </div>
  );
}
