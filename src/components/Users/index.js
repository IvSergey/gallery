import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, Route } from 'react-router-dom';

import { baseUrl } from "../../services";
import User from "../User";

const Users = ({ match }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getFetch = async () => {
      const result = await axios(baseUrl("users"));
      setUsers(result.data);
    };
    getFetch();
  }, []);
  return (
    <div>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <NavLink to={`${match.url}user/${user.id}`}>{user.name}</NavLink>
              {/* <NavLink to="/albums">{user.name}</NavLink> */}
            </li>
          );
        })}
      </ul>
      <Route path={`${match.path}user/:id`} component={User}></Route>
    </div>
  );
};

export default Users;
