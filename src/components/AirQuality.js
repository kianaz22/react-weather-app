import { useState, useContext, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { GlobalContext } from "../context/GlobalState";
import Particles from "./Particles";

const AirQuality = () => {
  const { data } = useContext(GlobalContext);
  const [quality, setQuality] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response1 = await fetch(
        `https://api.waqi.info/feed/${data.location.name}/?token=59279c91ec4c2ff95a7957e57269b2540e194f9a`
      ).then(res => res.json());
      const response2 = await fetch(
        `https://api.waqi.info/feed/${data.location.region}/?token=59279c91ec4c2ff95a7957e57269b2540e194f9a`
      ).then(res => res.json());
      setQuality(
        (response1.status === "ok" && response1.data) ||
          (response2.status === "ok" && response2.data)
      );
    }
    fetchData();
  }, [data]);

  const index = quality.aqi || "-";
  const colors = {
    green: "#1cb422",
    yellow: "rgb(254,254,0)",
    orange: "rgb(255,126,0)",
    red: "rgb(255,21,21)",
    magenta: "rgb(176,58,117)",
    grey: "rgba(0,0,0,.4)",
    lightGrey: "#f3f3f3",
  };

  const getLabel = aqi =>
    (aqi < 51 && [
      "Good",
      "Air quality is satisfactory, and air pollution poses little or no risk.",
    ]) ||
    (aqi < 101 && [
      "Moderate",
      "Air quality is acceptable, there may be a risk for  those who are sensitive to air pollution.",
    ]) ||
    (aqi < 151 && [
      "Unhealthy for sensitive groups",
      "Members of sensitive groups may experience health effects.",
    ]) ||
    (aqi < 201 && [
      "Unhealthy for sensitive groups",
      "Members of sensitive groups may experience health effects.",
    ]) ||
    (aqi < 301 && [
      "Very Unhealthy",
      "Health alert: The risk of health effects is increased for everyone.",
    ]) || [
      "Air quality index for this city is not available right now",
      "Data not available",
    ];

  const chartData = {
    datasets: [
      {
        data: [1, 1, 1, 1, 1, 1],
        backgroundColor: [
          "white",
          getLabel(index)[0] === "Good" ? colors.green : colors.lightGrey,
          getLabel(index)[0] === "Moderate" ? colors.yellow : colors.lightGrey,
          getLabel(index)[0] === "Unhealthy for sensitive groups"
            ? colors.orange
            : colors.lightGrey,
          getLabel(index)[0] === "Unhealthy" ? colors.red : colors.lightGrey,
          getLabel(index)[0] === "Very Unhealthy"
            ? colors.magenta
            : colors.lightGrey,
        ],
        borderWidth: 0,
        rotation: 150,
      },
    ],
  };
  const options = {
    cutout: "85%",
    events: [],
    plugins: {
      tooltip: { enabled: false },
    },
  };

  return (
    <div className="air-quality-container">
      <h2>Air Quality</h2>

      <div className="air-quality">
        <div className="quality-index">
          <div className="icon-wrapper">
            <Doughnut data={chartData} options={options} />
            <div className="donut-overlay">
              <div className="index">{index}</div>
              <div className="label">AQI</div>
            </div>
          </div>
          <div className="index-data">
            <div className="index-label">{getLabel(index)[0]}</div>
            <div className="index-text">{getLabel(index)[1]}</div>
          </div>
        </div>
        <Particles colors={colors} quality={quality} />
      </div>
    </div>
  );
};

export default AirQuality;
