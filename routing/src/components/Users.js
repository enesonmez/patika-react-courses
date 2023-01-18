import { NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <div>
      <h2>Users</h2>
      {isLoading && <div>Loading...</div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <NavLink to={`/users/${user.id}`} className={({ isActive }) => (isActive ? "active" : undefined)}>{user.name}</NavLink>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
}

export default Users;
