import React from "react";
import Particle from "./Particle";

const Particles = ({ colors, quality }) => {
  const array = ["pm25", "pm10", "co", "no2", "o3"];

  const particles = array.reduce(
    (obj, particle) => ({
      ...obj,
      [particle]: quality.iaqi?.[particle] ? quality.iaqi[particle].v : "-",
    }),
    {}
  );
  const getPm25Color = pm25 =>
    (pm25 < 51 && colors.green) ||
    (pm25 < 101 && colors.yellow) ||
    (pm25 < 151 && colors.orange) ||
    (pm25 < 201 && colors.red) ||
    (pm25 < 301 && colors.magenta) ||
    colors.grey;

  const getPm10Color = pm10 =>
    (pm10 < 40 && colors.green) ||
    (pm10 < 80 && colors.yellow) ||
    (pm10 < 120 && colors.orange) ||
    (pm10 < 300 && colors.red) ||
    (pm10 >= 300 && colors.magenta) ||
    colors.grey;

  const getCoColor = co =>
    (co < 9 && colors.green) ||
    (co < 10 && colors.yellow) ||
    (co >= 10 && colors.orange) ||
    colors.grey;

  return (
    <div className="particles">
      <Particle
        Particle="pm25"
        value={particles["pm25"]}
        color={getPm25Color(particles["pm25"])}
      />
      <Particle
        Particle="pm10"
        value={particles["pm10"]}
        color={getPm10Color(particles["pm10"])}
      />
      <Particle
        Particle="no2"
        value={particles["no2"]}
        color={getPm25Color(particles["no2"])}
      />
      <Particle
        Particle="O3"
        value={particles["o3"]}
        color={getPm25Color(particles["o3"])}
      />
      <Particle
        Particle="CO"
        value={particles["co"]}
        color={getCoColor(particles["co"])}
      />
    </div>
  );
};

export default Particles;
