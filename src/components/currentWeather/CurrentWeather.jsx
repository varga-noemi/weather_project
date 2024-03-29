import React from "react";
import "./CurrentWeather.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export const CurrentWeather = ({data}) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city.slice(0,-2)}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like </span>
            <span className="parameter-value">{Math.round(data.main.feels_like)} °C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind speed </span>
            <span className="parameter-value">{Math.round(data.wind.speed)*3.6} km/h</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity </span>
            <span className="parameter-value">{data.main.humidity} %</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Atmospheric pressure </span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
    
  );
};
