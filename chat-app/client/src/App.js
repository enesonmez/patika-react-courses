import "./App.css";

import { ChatProvider } from "./context/ChatContext";
import Container from "./components/Container";

import {  } from "./App.css";

function App() {
  return (
    <ChatProvider>
      <Container />
    </ChatProvider>
  );
}

export default App;
