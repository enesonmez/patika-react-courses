import React, { useEffect } from "react";
import axios from "axios";

import { useWeather } from "../context/WeatherContext";

function List() {
  const { city, weatherList, setWeatherList, cities, days } = useWeather();
  const apiKey = "85bdcf16d2e44ce4bb19a034a600a7cc";

  useEffect(() => {
    const currentCity = cities.find((item) => item.name === city);
    const getWeather = async () => axios
      .get("https://api.weatherbit.io/v2.0/forecast/daily", {
        params: {
          lat: currentCity.latitude,
          lon: currentCity.longitude,
          key: apiKey,
          days: "7",
          lang: "tr",
          units: "M",
        },
      })
      .then((res) => {
        setWeatherList(res.data.data);
      });

      getWeather();
  }, [city]);

  return (
    <div className="row pt-4 justify-content-center">
      {weatherList.map((item, i) => (
        <div
          key={i}
          className={`card col-6 col-sm-3 col-md align-items-center border ${
            i === 0 ? "border-1 bg-light" : "border-0"
          }`}
        >
          <div className="card-body text-center p-0">
            <p className="fw-semibold text-body-tertiary fs-5 my-1">
              {days[new Date(item.valid_date).getDay()]}
            </p>
            <img
              src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`}
              className="card-img"
              alt="..."
            ></img>
            <p className="fw-bolder text-secondary fs-5 my-1">
              <span>{Math.round(item.max_temp)}&#176; </span>
              <span className="text-body-tertiary">
                {Math.round(item.min_temp)}&#176;
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default React.memo(List);
