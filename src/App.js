import Search from './components/Search'
import Data from './components/Data'
import Current from './components/Current'
import { useState,useEffect } from 'react'

function App() {
  const [city, setCity] = useState('')
  const [data, setData] = useState('')
  const [matches, setMatches] = useState([])
  const [tempUnit, setTempUnit] = useState('c')

  useEffect(() => {
    const noPosition = () => {
      fetchData('tehran')
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          fetchDataByPostion(position.coords.latitude, position.coords.longitude)
        },
        error => {
          console.error(error)
          noPosition()
        }, { enableHighAccuracy: true });
    }
    else {
      noPosition()
    }
  }, [])

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
      .catch(err => {
        console.error(err);
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
  const handleChange = (text) => {
    if (text.length > 3) {
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
        })
    }
    else { setMatches([]) }
    setCity(text)
  }
  const handleClick = (e) => {
    setCity(e.target.textContent)
    fetchData(e.target.textContent)
    setMatches([])
    setTimeout(() => {
      setCity('')
    }, 2000);
  }
  const handleBlur = (e) => {
    setCity('')
    setTimeout(() => {
      setMatches([])
    }, 200);
  }
  
  if (data)
    return (
      <div className='app' onClick={(e)=>console.log(e)}>
        <div className='background'>
          <header>
            <Search data={data} city={city} matches={matches} handleBlur={handleBlur}
              handleChange={handleChange} handleClick={handleClick} />
            <div className='temp-unit'>
              <button className={tempUnit === 'f' ? 'active' : ''} onClick={() => setTempUnit('f')}>F</button>
              <button className={tempUnit === 'c' ? 'active' : ''} onClick={() => setTempUnit('c')}>C</button>
            </div>
          </header>
          <Current data={data} tempUnit={tempUnit} />
        </div>
        <Data data={data} tempUnit={tempUnit} />
      </div>
    );
  else
    return <div>loading...</div>
}

export default App;