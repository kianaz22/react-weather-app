import { Doughnut } from 'react-chartjs-2'
import Particle from './Particle'

const AirQuality = ({ quality }) => {

  const index = quality.aqi || '-'
  const colors = {
    green: '#1cb422', yellow: 'rgb(254,254,0)', orange: 'rgb(255,126,0)',
    red: 'rgb(255,21,21)', magenta: 'rgb(176,58,117)', grey: 'rgba(0,0,0,.4)', lightGrey: '#f3f3f3'
  }
  const array = ['pm25', 'pm10', 'co', 'no2', 'o3']

  const particles = array.reduce((obj, particle) => (
    { ...obj, [particle]: quality.iaqi?.[particle] ? quality.iaqi[particle].v : '-' }), {})

  const getLabel = (aqi) =>
    (aqi < 51 && ['Good', 'Air quality is satisfactory, and air pollution poses little or no risk.']) ||
    (aqi < 101 && ["Moderate", "Air quality is acceptable, there may be a risk for  those who are sensitive to air pollution."]) ||
    (aqi < 151 && ["Unhealthy for sensitive groups", "Members of sensitive groups may experience health effects."]) ||
    (aqi < 201 && ["Unhealthy for sensitive groups", "Members of sensitive groups may experience health effects."]) ||
    (aqi < 301 && ["Very Unhealthy", "Health alert: The risk of health effects is increased for everyone."]) ||
    ["Air quality index for this city is not available right now", "Data not available"]

  const getPm25Color = (pm25) =>
    (pm25 < 51 && colors.green) || (pm25 < 101 && colors.yellow) || (pm25 < 151 && colors.orange) ||
    (pm25 < 201 && colors.red) || (pm25 < 301 && colors.magenta) || colors.grey

  const getPm10Color = (pm10) =>
    (pm10 < 40 && colors.green) || (pm10 < 80 && colors.yellow) || (pm10 < 120 && colors.orange) ||
    (pm10 < 300 && colors.red) || (pm10 >= 300 && colors.magenta) || colors.grey

  const getCoColor = (co) =>
    (co < 9 && colors.green) || (co < 10 && colors.yellow) || (co >= 10 && colors.orange) || colors.grey

  const chartData = {
    datasets: [
      {
        data: [1, 1, 1, 1, 1, 1],
        backgroundColor: [
          'white',
          getLabel(index)[0] === 'Good' ? colors.green : colors.lightGrey,
          getLabel(index)[0] === 'Moderate' ? colors.yellow : colors.lightGrey,
          getLabel(index)[0] === 'Unhealthy for sensitive groups' ? colors.orange : colors.lightGrey,
          getLabel(index)[0] === 'Unhealthy' ? colors.red : colors.lightGrey,
          getLabel(index)[0] === 'Very Unhealthy' ? colors.magenta : colors.lightGrey
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
          <Particle Particle='pm25' value={particles['pm25']} color={getPm25Color(particles['pm25'])} />
          <Particle Particle='pm10' value={particles['pm10']} color={getPm10Color(particles['pm10'])} />
          <Particle Particle='no2' value={particles['no2']} color={getPm25Color(particles['no2'])} />
          <Particle Particle='O3' value={particles['o3']} color={getPm25Color(particles['o3'])} />
          <Particle Particle='CO' value={particles['co']} color={getCoColor(particles['co'])} />
        </div>

      </div>
    </div>
  )
}

export default AirQuality
