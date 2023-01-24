import { createContext, useState, useContext } from "react";

import cities from "../data/cities_of_turkey.json";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState(
    cities.find((item) => item.name === "İstanbul").name
  );
  const [weatherList, setWeatherList] = useState([]);
  const days = {
    0: "Paz",
    1: "Pzt",
    2: "Sal",
    3: "Çar",
    4: "Per",
    5: "Cum",
    6: "Cmt",
  };

  const values = {
    city,
    setCity,
    cities,
    weatherList,
    setWeatherList,
    days,
  };
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
