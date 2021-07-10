import Current from './components/Current'
import Forecast from './components/Forecast'
import { useState } from 'react'
import { useEffect } from 'react'


function App() {

  const [city, setCity] = useState('')
  const [data, setData] = useState('')
  const [matches, setMatches] = useState([])

  const handleOnChange = (text) => {
    if (text.length > 2) {
      fetch(`https://weatherapi-com.p.rapidapi.com/search.json?q=${text}`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": "3927819375mshd44cfb360819a63p12aeabjsn863dc422f8df",
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com"
        }
      })
        .then(res => res.json())
        .then(response => {
          setMatches(response)
          console.log(matches)
        })
    }
    setCity(text)
  }
  const fetchData = (city) => {
    fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "3927819375mshd44cfb360819a63p12aeabjsn863dc422f8df",
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com"
      }
    })
      .then(res => res.json())
      .then(res => {
        setData(res)
      })
  }
  const fetchDataByPostion = (lat, long) => {
    fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${lat}%2C${long}&days=3`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "3927819375mshd44cfb360819a63p12aeabjsn863dc422f8df",
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com"
      }
    })
      .then(res => res.json())
      .then(res => {
        setData(res)
      })
  }

  const handleClick = (e) => {
    setCity(e.target.textContent)
    localStorage.setItem('lastCity', JSON.stringify(city))
    fetchData(city)
    setMatches([])
    setCity('')
  }
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          fetchDataByPostion(position.coords.latitude, position.coords.longitude)
        },
        error => {
          console.log("Error: ", error)
        }, { enableHighAccuracy: true });
    }
    else {
      const lastCity = JSON.parse(localStorage.getItem('lastCity'))
      lastCity ? fetchData(lastCity) : fetchData('tehran')
    }
  }, [])

  return (
    <div className='app'>
      <div onBlur={() => {
        setTimeout(() => { setMatches([]) }, 100)
      }}>
        <input type='text' value={city} placeholder='search city ...'
          onChange={e => handleOnChange(e.target.value)} />
        {matches && matches.map((m, i) =>
          <div onClick={e => handleClick(e)} key={i}>{m.name}</div>)}
      </div>
      {data && <Current data={data} />}
      {data && <Forecast data={data} />}
    </div>
  );
}

export default App;
