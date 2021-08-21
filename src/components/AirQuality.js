import { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import Particle from './Particle'

const AirQuality = ({ city }) => {

  const url = `https://api.weatherbit.io/v2.0/current/airquality?city=${city}&key=5f590d6bda074732b090b04560e647c1`
  const [qualityIndex, setQualityIndex] = useState('')
  const [quality, setQuality] = useState('')

  const getLabel = (qualityIndex) => {
    if (qualityIndex < 51)
      return ['Good', 'Air quality is satisfactory, and air pollution poses little or no risk.'];
    else if (qualityIndex < 101)
      return ["Moderate", "Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution."];
    else if (qualityIndex < 151)
      return ["Unhealthy for sensitive groups", "Members of sensitive groups may experience health effects. The general public is less likely to be affected."];
    else if (qualityIndex < 201)
      return ["Unhealthy", "Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects."];
    else if (qualityIndex < 301)
      return ["Very Unhealthy", "Health alert: The risk of health effects is increased for everyone."];
  }
  const getPm25Color = (pm25) => {
    if (pm25 < 12)
      return '#1cb422'
    else if (pm25 < 36)
      return 'rgb(254,254,0)'
    else if (pm25 < 56)
      return 'rgb(255,126,0)'
    else if (pm25 < 151)
      return 'rgb(255,21,21)'
    else if (pm25 < 424)
      return 'rgb(176,58,117)'
    return 'rgba(0,0,0,.4)'
  }
  const getPm10Color = (pm10) => {
    if (pm10 < 54)
      return '#1cb422'
    else if (pm10 < 154)
      return 'rgb(254,254,0)'
    else if (pm10 < 254)
      return 'rgb(255,126,0)'
    else if (pm10 < 354)
      return 'rgb(255,21,21)'
    else if (pm10 < 424)
      return 'rgb(176,58,117)'
    return 'rgba(0,0,0,.4)'
  }
  const getSo2Color = (so2) => {
    if (so2 < 0.1)
      return '#1cb422'
    else if (so2 < 0.2)
      return 'rgb(254,254,0)'
    else if (so2 < 1)
      return 'rgb(255,126,0)'
    else if (so2 < 3)
      return 'rgb(255,21,21)'
    else if (so2 < 5)
      return 'rgb(176,58,117)'
    return 'rgba(0,0,0,.4)'
  }
  const getNo2Color = (no2) => {
    if (no2 < 0.1)
      return '#1cb422'
    else if (no2 < 5)
      return 'rgb(254,254,0)'
    else if (no2 > 5)
      return 'rgb(176,58,117)'
    return 'rgba(0,0,0,.4)'
  }
  const getCoColor = (co) => {
    if (co < 9)
      return '#1cb422'
    else if (co < 10)
      return 'rgb(254,254,0)'
    else if (co >= 10)
      return 'rgb(176,58,117)'
    return 'rgba(0,0,0,.4)'
  }
  const chartData = {
    datasets: [
      {
        data: [1, 1, 1, 1, 1, 1],
        backgroundColor: [
          'white',
          getLabel(qualityIndex)[0] === 'Good' ? '#1cb422' : '#f3f3f3',
          getLabel(qualityIndex)[0] === 'Moderate' ? 'rgb(254,254,0)' : '#f3f3f3',
          getLabel(qualityIndex)[0] === 'Unhealthy for sensitive groups' ? 'rgb(255,126,0)' : '#f3f3f3',
          getLabel(qualityIndex)[0] === 'Unhealthy' ? 'rgb(255,21,21)' : '#f3f3f3',
          getLabel(qualityIndex)[0] === 'Very Unhealthy' ? 'rgb(176,58,117)' : '#f3f3f3',
        ],
        borderWidth: 0,
        rotation: 150,
      },
    ],
  }
  const options = {
    cutout: '85%',
    events: [],
    plugins: {
      tooltip: { enabled: false }
    }
  }

  useEffect(() => {

    fetch(url)
      .then(res => res.json())
      .then(res => {
        setQualityIndex(res.data[0].aqi);
        setQuality(res.data[0])
        console.log(res)
      })
  }, [city])

  return (
    <div className='air-quality-container'>
      <h2>Air Quality</h2>
      <div className='air-quality'>

        <div>
          <div className='icon-wrapper'>
            <Doughnut data={chartData} options={options} />
            <div>
              <div style={{ fontWeight: '600', fontSize: '1.2em' }}>{qualityIndex}</div>
              <div style={{ fontSize: '.7em', fontWeight: '600', opacity: '.5' }}>AQI</div>
            </div>
          </div>
          <div className='condition-data'>
            <div>{getLabel(qualityIndex)[0]}</div>
            <div>{getLabel(qualityIndex)[1]}</div>
          </div>
        </div>

        <div style={{ width: '100%' }} >
          <Particle Particle={'PM25'} value={Math.round(quality.pm25)} color={getPm25Color(quality.pm25)} />

          <Particle Particle={'PM10'} value={Math.round(quality.pm10)} color={getPm10Color(quality.pm10)} />

          <Particle Particle={'SO2'} value={(quality.so2 / 1000).toFixed(2)} color={getSo2Color((quality.so2 / 1000).toFixed(2))} />

          <Particle Particle={'NO2'} value={(quality.no2 / 1000).toFixed(2)} color={getNo2Color((quality.no2 / 1000).toFixed(2))} />

          <Particle Particle={'O3'} value={(quality.o3 / 1000).toFixed(2)} color={getNo2Color((quality.o3 / 1000).toFixed(2))} />

          <Particle Particle={'CO'} value={(quality.co / 1000).toFixed(2)} color={getCoColor((quality.co / 1000).toFixed(2))} />
        </div>

      </div>
    </div>
  )
}

export default AirQuality
