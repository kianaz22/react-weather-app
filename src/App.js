import { Default } from "react-spinners-css";
import Search from "./components/Search";
import Current from "./components/Current";
import Hourly from "./components/Hourly";
import Daily from "./components/Daily";
import Conditions from "./components/Conditions";
import { useEffect, useContext } from "react";
import { GlobalContext } from "./context/GlobalState.js";

function App() {
  const { tempUnit, setTempUnit, data, setData, city, setCity } =
    useContext(GlobalContext);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          fetchDataByPostion(
            position.coords.latitude,
            position.coords.longitude
          );
        },
        error => {
          console.error(error);
          setCity("tehran");
        },
        { enableHighAccuracy: true }
      );
    } else {
      setCity("tehran");
    }
  }, []);

  useEffect(() => {
    console.log("3", city);
    if (city) fetchData(city);
  }, [city]);

  const fetchData = city => {
    fetch(
      `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "3927819375mshd44cfb360819a63p12aeabjsn863dc422f8df",
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
        },
      }
    )
      .then(res => res.json())
      .then(res => {
        setData(res);
      })
      .catch(err => {
        console.error(err);
      });
  };
  const fetchDataByPostion = (lat, long) => {
    fetch(
      `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${lat}%2C${long}&days=3`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "3927819375mshd44cfb360819a63p12aeabjsn863dc422f8df",
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
        },
      }
    )
      .then(res => res.json())
      .then(res => {
        setData(res);
      });
  };

  if (data)
    return (
      <div className="app">
        <div className="background">
          <header>
            <Search fetchData={fetchData} />
            <div className="temp-unit">
              <button
                className={tempUnit === "f" ? "active" : ""}
                onClick={() => setTempUnit("f")}
              >
                F
              </button>
              <button
                className={tempUnit === "c" ? "active" : ""}
                onClick={() => setTempUnit("c")}
              >
                C
              </button>
            </div>
          </header>

          <Current />
        </div>

        <div className="data">
          <Hourly />
          <div className="flex-wrapper">
            <Daily />
            <Conditions />
          </div>
        </div>
      </div>
    );
  else
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Default size={100} />
      </div>
    );
}

export default App;
