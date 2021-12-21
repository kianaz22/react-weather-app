import { useContext } from "react";
import Condition from "./Condition";
import AirQuality from "./AirQuality";
import { FaWind, FaSun } from "react-icons/fa";
import { WiHumidity, WiRainMix } from "react-icons/wi";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { GlobalContext } from "../context/GlobalState";

const Conditions = () => {
  const { data } = useContext(GlobalContext);
  const today = data.forecast.forecastday[0];

  return (
    <div className="conditions-container">
      <h2>Conditions</h2>
      <div className="conditions">
        <Condition
          icon={<FaWind size={18} style={{ color: "#42cc6a" }} />}
          data={`${Math.round(data.current["wind_kph"])} km/h`}
          text="Wind"
          bgColor="#aff5b1"
        />
        <Condition
          icon={<WiRainMix size={30} style={{ color: "#43a4e4" }} />}
          data={`${today.day["daily_chance_of_rain"]}%`}
          text="Rain"
          bgColor="#add6f5"
        />
        <Condition
          icon={<WiHumidity size={30} color="#adafb6" />}
          data={`${data.current.humidity}%`}
          text="Humidity"
          bgColor="#eeeeee"
        />
        <Condition
          icon={<FaSun size={20} color="#ddb458" />}
          data={data.current.uv}
          text="UV Index"
          bgColor="#f7ddac"
        />
        <Condition
          icon={<FiSunrise size={30} color="#E68319" />}
          data={today.astro.sunrise.slice(0, 5)}
          text="Sunrise"
        />
        <Condition
          icon={<FiSunset size={30} color="#F2A807" />}
          data={today.astro.sunset.slice(0, 5)}
          text="Sunset"
        />

        <AirQuality />
      </div>
    </div>
  );
};

export default Conditions;
