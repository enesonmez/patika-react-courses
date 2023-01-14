import { useState, useEffect } from "react";
import axios from 'axios'

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((data) => setUsers(data))
    //   .catch((err) => console.log(err))
    //   .finally(() => setIsLoading(false));
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <div>
      <h1>Users</h1>
      {isLoading && <div>Loading...</div>}

      {users.map((user, i) => (
        <div key={i}>{user.name}</div>
      ))}
    </div>
  );
}

export default Users;
