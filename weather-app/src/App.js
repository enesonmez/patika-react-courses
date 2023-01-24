import './App.css';

import { WeatherProvider } from "./context/WeatherContext";

import MainPage from "./components/MainPage";

function App() {
  return (
    <WeatherProvider>
      <MainPage />
    </WeatherProvider>
  );
}

export default App;
