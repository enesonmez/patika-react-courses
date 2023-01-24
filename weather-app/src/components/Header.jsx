import React from "react";

import { useWeather } from "../context/WeatherContext";

function Header() {
  const { city, setCity, cities } = useWeather();

  const handleChange = (event) => {
    setCity(event.target.value)
  }

  return (
    <div className="row bg-info bg-opacity-10">
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 p-3">
        <select
          className="w-100 px-2 py-1 border border-dark border-opacity-25 rounded-2 fw-semibold"
          value={city}
          onChange={handleChange}
        >
          {cities.map((item,i) => (
            <option key={i}>{item.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Header;
