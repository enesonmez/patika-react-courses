import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Mehmet");
  const [age, setAge] = useState(25);
  const [friends, setFriends] = useState(["Ahmet", "Fatma"]);
  const [address, setAddress] = useState({ title: "Istanbul", zip: 34568 });

  return (
    <div className="App">
      <h1>Merhaba {name}!</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Ahmet")}>Change Name</button>
      <button onClick={() => setAge(15)}>Change Age</button>

      <hr />
      <br />

      <h2>Friends</h2>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}
      <button onClick={() => setFriends([...friends, "Ayşe"])}>
        Add new friend
      </button>

      <hr />
      <br />

      <h2>Address</h2>
      <div>
        {address.title} - {address.zip}
      </div>
      <button onClick={() => setAddress({ ...address, title: "Ankara" })}>
        Update address
      </button>
    </div>
  );
}

export default App;
