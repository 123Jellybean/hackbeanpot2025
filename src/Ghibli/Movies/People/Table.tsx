import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import PeopleDetails from "./Details";
import { Link } from "react-router-dom";


export default function PeopleTable({ users = [] }: { users?: any[] }) {


  return (
    <div id="wd-people-table">
      <PeopleDetails />
      <table className="table table-striped">
        <thead>
          <tr><th>Name</th><th>Last Activity</th></tr>
        </thead>
        <tbody>

          {users

            .map((user: any) => (
              <tr key={user._id}>
                <td className="wd-full-name text-nowrap">
                  <Link to={`/Ghibli/Account/Users/${user._id}`} className="text-decoration-none">
                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                    <span className="wd-first-name">{user.firstName}</span>
                    <span className="wd-last-name">{user.lastName}</span>
                  </Link>
                </td>

                <td className="wd-last-activity">{user.lastActivity}</td>

              </tr>
            ))}



        </tbody>
      </table>
    </div>);
}