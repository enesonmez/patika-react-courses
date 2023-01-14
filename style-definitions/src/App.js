import "./App.css";
import A from "./components/A";
import B from "./components/B";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            color: "red",
            backgroundColor: "white",
            paddingTop: 50,
            width: 600,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quas
          voluptatem dicta laboriosam error saepe tempore sunt non laborum
          facilis, numquam praesentium voluptate dolore repudiandae. A, amet
          deserunt. Repellat, numquam.
        </div>
        <div class="alert alert-success" role="alert">
          A simple success alert—check it out!
        </div>

        <A />
        <B />
      </header>
    </div>
  );
}

export default App;
