import moment from "moment";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState.js";

const Hourly = () => {
  const { tempUnit, data } = useContext(GlobalContext);

  const convertToNumber = time => parseInt(moment(time, "YYYY-MM-DD HH:mm").format("HH"));

  const timeCheck = i => {
    if (i === now) return "Now";
    else if (i === 0) return "12AM";
    else if (i === 12) return "12PM";
    else if (i < 12) return i + "AM";
    else if (i > 12) return i - 12 + "PM";
  };

  const now = convertToNumber(data.location.localtime);
  const hoursToday = data.forecast.forecastday[0]["hour"].slice(now);
  const hoursTomorrow = data.forecast.forecastday[1]["hour"].slice(0, now);
  const hours = [...hoursToday, ...hoursTomorrow];

  const scrollRight = () => {
    if (document.querySelector(".hourly")) {
      const hourly = document.querySelector(".hourly");
      hourly.scrollLeft += 450;
    }
  };
  const scrollLeft = () => {
    if (document.querySelector(".hourly")) {
      const hourly = document.querySelector(".hourly");
      hourly.scrollLeft -= 450;
    }
  };

  return (
    <div className="hourly-container">
      <div className="scroll-container">
        <button onClick={scrollLeft}>
          <FaChevronLeft />
        </button>
        <div className="hourly">
          {hours.map((hr, i) => (
            <div className="hour" key={i}>
              <div>
                <img alt="condition" src={hr.condition.icon} />
              </div>
              <div className="temp">{Math.round(hr[`temp_${tempUnit}`])}°</div>
              <div className="time">
                {timeCheck(convertToNumber(hr.time))}
              </div>
            </div>
          ))}
        </div>
        <button onClick={scrollRight}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Hourly;
