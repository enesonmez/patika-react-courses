import "./App.css";
import User from "./components/User";
  
const friends = [
  {
    id: 6451321,
    name: "Ahmet",
  },
  {
    id: 5432136,
    name: "Selim",
  },
  {
    id: 5567645,
    name: "Ayşe",
  },
];

function App() {
  return (
    <div className="App">
      <User
        name="Mehmet"
        surname="Sevil"
        isLoggedIn={true}
        age={29}
        friends={friends}
        address={{ title: "İstanbul/Şişli", zip: 34028 }}
      />
    </div>
  );
}

export default App;
