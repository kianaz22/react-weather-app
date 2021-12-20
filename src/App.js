import { Default } from 'react-spinners-css';
import Search from './components/Search'
import Current from './components/Current'
import Hourly from './components/Hourly'
import Daily from './components/Daily'
import Conditions from './components/Conditions'
import { useState, useEffect,useContext } from 'react'
import { GlobalContext } from "./context/GlobalState.js";

function App() {
  const { tempUnit,setTempUnit,setCity,city } = useContext(GlobalContext);

  // const [city, setCity] = useState('')
  const [data, setData] = useState('')
  const [matches, setMatches] = useState([])
  // const [tempUnit, setTempUnit] = useState('c')

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
        .then(res => {
          setMatches(res)
        })
    }
    else setMatches([]) 
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
      <div className='app'>
        <div className='background'>
          <header>
            <Search data={data} matches={matches} handleBlur={handleBlur}
              handleChange={handleChange} handleClick={handleClick} />
            <div className='temp-unit'>
              <button className={tempUnit === 'f' ? 'active' : ''} onClick={() => setTempUnit('f')}>F</button>
              <button className={tempUnit === 'c' ? 'active' : ''} onClick={() => setTempUnit('c')}>C</button>
            </div>
          </header>
          <Current data={data} />
        </div>

        <div className='data'>
          <Hourly data={data} />
          <div className='flex-wrapper'>
            <Daily data={data} />
            <Conditions data={data} />
          </div>
        </div>

      </div>
    );
  else
    return <div style={{ height:'100vh', display:'flex',justifyContent:'center',alignItems:'center' }}>
    <Default size={100} />
    </div>
}

export default App;
