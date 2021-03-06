import moment from "moment";
import React, { useContext } from "react";
import { FaTint } from "react-icons/fa";
import { GlobalContext } from "../context/GlobalState.js";

const Daily = () => {
  const { tempUnit, data } = useContext(GlobalContext);

  const nextDays = [
    data.forecast.forecastday[1],
    data.forecast.forecastday[2],
    data.forecast.forecastday[0],
    data.forecast.forecastday[1],
    data.forecast.forecastday[2],
  ];

  const date = moment(data.location.localtime, "YYYY-MM-DD HH:mm");

  return (
    <div className="daily-container">
      <h2>Daily</h2>
      <div className="daily">
        {nextDays.map((n, i) => (
          <div className="day" key={i}>
            <div className="icon">
              <img alt="condition" src={n.day.condition.icon} />
            </div>
            <div className="date-and-condition">
              <div className="date">
                {date
                  .clone()
                  .add(i + 1, "d")
                  .format("dddd")}
              </div>
              <div className="condition">{n.day.condition.text}</div>
            </div>
            <div
              className="rain"
              style={{
                visibility:
                  n.day["daily_chance_of_rain"] > 0 ? "visible" : "hidden",
              }}
            >
              <FaTint className="rain" />
              {n.day["daily_chance_of_rain"]}%
            </div>
            <div className="min-max">
              <span>{Math.round(n.day[`mintemp_${tempUnit}`])}°</span>&nbsp;
              {Math.round(n.day[`maxtemp_${tempUnit}`])}°
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Daily;
