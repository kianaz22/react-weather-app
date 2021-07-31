import { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2'

const AirQuality = ({ city }) => {

  const url = `https://api.weatherbit.io/v2.0/current/airquality?city=${city}&key=5f590d6bda074732b090b04560e647c1`
  const [qualityIndex, setQualityIndex] = useState('')
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
  useEffect(() => {

    fetch(url)
      .then(res => res.json())
      .then(res => setQualityIndex(res.data[0].aqi))
  }, [city])

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
    cutout: '75%',
    events: [],
    plugins: {
      tooltip: { enabled: false }
    }
  }
  return (
    <div className='air-quality-container'>
      <h2>Air Quality</h2>
    <div className='air-quality'>
      
      <div>
        <div className='icon-wrapper'>
          <Doughnut data={chartData} options={options} />
          <div>
            <div style={{ fontWeight:'600',fontSize:'1.2em'}}>{qualityIndex}</div>
            <div style={{fontSize:'.7em',fontWeight:'600',opacity:'.5' }}>AQI</div>
          </div>
        </div>
        <div className='condition-data'>
          <div>{getLabel(qualityIndex)[0]}</div>
          <div>{getLabel(qualityIndex)[1]}</div>
        </div>
      </div>


      <div style={{ width: '100%' }} >

        <div>
          <div style={{ fontSize:'1.4em', borderBottom: '2px solid rgba(0,0,0,.4)' }}>-</div>
          <div>PM2</div>
        </div>
        <div>
          <div style={{ fontSize:'1.4em', borderBottom: '2px solid #1cb422' }}>9</div>
          <div>PM</div>
        </div>
        <div>
          <div style={{ fontSize:'1.4em', borderBottom: '2px solid rgba(0,0,0,.4)' }}>-</div>
          <div>SO2</div>
        </div>
        <div>
          <div style={{ fontSize:'1.4em', borderBottom: '2px solid rgba(0,0,0,.4)' }}>-</div>
          <div>NO2</div>
        </div>
        <div>
          <div style={{ fontSize:'1.4em', borderBottom: '2px solid rgba(0,0,0,.4)' }}>-</div>
          <div>O3</div>
        </div>
        <div>
          <div style={{ fontSize:'1.4em', borderBottom: '2px solid rgba(0,0,0,.4)' }}>-</div>
          <div>CO</div>
        </div>

      </div>



    </div>
    </div>
  )
}

export default AirQuality
