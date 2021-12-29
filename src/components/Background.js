import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import moment from "moment";
import nightImg from "../img/night.jpg";
import dayImg from "../img/day.png";
import sunriseImg from "../img/sunrise.jpg";
import sunsetImg from "../img/sunset.jpg";

const Background = () => {
  const { data } = useContext(GlobalContext);
  const [source, setSource] = useState(nightImg);
  const convertToNumber = time =>
    parseInt(moment(time, "YYYY-MM-DD HH:mm").format("HH"));

  const now = convertToNumber(data.location.localtime);
  const sunrise = parseInt(
    data.forecast.forecastday[0].astro.sunrise.slice(0, 2)
  );
  const sunset =
    parseInt(data.forecast.forecastday[0].astro.sunset.slice(0, 2)) + 12;

  const check = () => {
    if (now === sunset) return sunsetImg;
    if (now === sunrise) return sunriseImg;
    if (now < sunrise || now > sunset) return nightImg;
    if (now > sunrise || now < sunset) return dayImg;
  };

  useEffect(() => {
    setSource(check());
  }, [data]);

  return <img className="bg-img" src={source} alt="sky" />;
};

export default Background;
