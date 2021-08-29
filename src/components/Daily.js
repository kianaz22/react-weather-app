import moment from 'moment'
import React from 'react'
import { FaTint } from 'react-icons/fa'

const Daily = ({ data, tempUnit }) => {
    
    const next = data.forecast.forecastday.slice(1)
    next.push(data.forecast.forecastday[1])
    next.push(data.forecast.forecastday[0])
    next.push(data.forecast.forecastday[2])

    const date = moment(data.location.localtime, 'YYYY-MM-DD HH:mm')
   
    return (
        <div className='daily-container'>
            <h2>Daily</h2>
            <div className='daily'>
                {next.map((n, i) =>

                    <div key={i}>
                        <div className='left'>
                            <img alt='condition' src={n.day.condition.icon} />
                        </div>
                        <div>
                            <div >{date.clone().add(i + 1, 'd').format('dddd')}</div>
                            <div className='condition'>{n.day.condition.text}</div>
                        </div>
                        <div style={{ visibility: n.day['daily_chance_of_rain'] > 0 ? 'visible' : 'hidden' }}>
                            <FaTint className='rain' />{n.day['daily_chance_of_rain']}%
                        </div>
                        <div>
                            <span className='transparent'>{Math.round(n.day[`mintemp_${tempUnit}`])}°</span>&nbsp;
                            {Math.round(n.day[`maxtemp_${tempUnit}`])}°
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Daily
