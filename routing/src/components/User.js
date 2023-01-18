import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function User() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .catch(() => setUser("Not found user"))
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <div>
      <h2>User Detail</h2>
      {isLoading && <p>Loading...</p>}

      {!isLoading && <code>{JSON.stringify(user)}</code>}

      <br />
      <br />

      <Link to={`/users/${parseInt(id) + 1}`}>
        Next User ({parseInt(id) + 1})
      </Link>
    </div>
  );
}

export default User;
