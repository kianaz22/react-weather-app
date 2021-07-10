import Current from './components/Current'
import Forecast from './components/Forecast'
import { useState } from 'react'
import { useEffect } from 'react'


function App() {

  const [city, setCity] = useState('paris')

  const [data, setData] = useState('')

  const fetchData = () => {
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
  
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className='app'>
      <div>
        <input type='text' value={city}
          onChange = {e => setCity(e.target.value)} />
        <button onClick={fetchData}>Search</button>
      </div>      
      {data && <Current data={data}/>}
      <Forecast />
    </div>
  );
}

export default App;
