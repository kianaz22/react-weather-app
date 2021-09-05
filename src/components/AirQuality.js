import { Doughnut } from 'react-chartjs-2'
import Particle from './Particle'

const AirQuality = ({ quality }) => {

  const index = quality.aqi ? quality.aqi : '-'
  const pm25 = quality.iaqi.pm25 ? quality.iaqi.pm25.v : '-' 
  const pm10 = quality.iaqi.pm10 ? quality.iaqi.pm10.v : '-' 
  const co = quality.iaqi.co ? quality.iaqi.co.v : '-' 
  const no2 = quality.iaqi.no2 ? quality.iaqi.no2.v : '-' 
  const o3 = quality.iaqi.o3 ? quality.iaqi.o3.v : '-' 

  const getLabel = (aqi) => {
    if (aqi < 51)
      return ['Good', 'Air quality is satisfactory, and air pollution poses little or no risk.'];
    else if (aqi < 101)
      return ["Moderate", "Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution."];
    else if (aqi < 151)
      return ["Unhealthy for sensitive groups", "Members of sensitive groups may experience health effects. The general public is less likely to be affected."];
    else if (aqi < 201)
      return ["Unhealthy", "Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects."];
    else if (aqi < 301)
      return ["Very Unhealthy", "Health alert: The risk of health effects is increased for everyone."];
    else
      return ["Air quality index for this city is not available right now", "Data not available"]
  }
  const getPm25Color = (pm25) => {
    if (pm25 < 51)
      return '#1cb422'
    else if (pm25 < 101)
      return 'rgb(254,254,0)'
    else if (pm25 < 151)
      return 'rgb(255,126,0)'
    else if (pm25 < 201)
      return 'rgb(255,21,21)'
    else if (pm25 < 301)
      return 'rgb(176,58,117)'
    return 'rgba(0,0,0,.4)'
  }
  const getPm10Color = (pm10) => {
    if (pm10 < 40)
      return '#1cb422'
    else if (pm10 < 80)
      return 'rgb(254,254,0)'
    else if (pm10 < 120)
      return 'rgb(255,126,0)'
    else if (pm10 < 300)
      return 'rgb(255,21,21)'
    else if (pm10 > 300)
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
          getLabel(index)[0] === 'Good' ? '#1cb422' : '#f3f3f3',
          getLabel(index)[0] === 'Moderate' ? 'rgb(254,254,0)' : '#f3f3f3',
          getLabel(index)[0] === 'Unhealthy for sensitive groups' ? 'rgb(255,126,0)' : '#f3f3f3',
          getLabel(index)[0] === 'Unhealthy' ? 'rgb(255,21,21)' : '#f3f3f3',
          getLabel(index)[0] === 'Very Unhealthy' ? 'rgb(176,58,117)' : '#f3f3f3',
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

  return (
    <div className='air-quality-container'>
      <h2>Air Quality</h2>

      <div className='air-quality'>

        <div className='quality-index'>
          <div className='icon-wrapper'>
            <Doughnut data={chartData} options={options} />
            <div className='donut-overlay'>
              <div className='index'>{index}</div>
              <div className='label'>AQI</div>
            </div>
          </div>
          <div className='index-data'>
            <div className='index-label'>{getLabel(index)[0]}</div>
            <div className='index-text'>{getLabel(index)[1]}</div>
          </div>
        </div>

        <div className='particles'>
          <Particle Particle='pm25' value={pm25} color={getPm25Color(pm25)} />
          <Particle Particle='pm10' value={pm10} color={getPm10Color(pm10)} />
          <Particle Particle='no2' value={no2} color={getPm25Color(no2)} />
          <Particle Particle='O3' value={o3} color={getPm25Color(o3)} />
          <Particle Particle='CO' value={co} color={getCoColor(co)} />
        </div>

      </div>
    </div>
  )
}

export default AirQuality
