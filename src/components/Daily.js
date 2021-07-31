import React from 'react'
import { FaTint } from 'react-icons/fa'

const Daily = ({ data,tempUnit }) => {
    const next = data.forecast.forecastday.slice(1)
    next.push(data.forecast.forecastday[1])
    next.push(data.forecast.forecastday[0])
    next.push(data.forecast.forecastday[2])

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
        "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
    const today = new Date(data.location.localtime).getDay()
    const days = dayNames.slice(today + 1, today + 6)

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
                            <div >{days[i]}</div>
                            <div className='condition'>{n.day.condition.text}</div>
                        </div>
                        <div style={{ visibility: n.day['daily_chance_of_rain'] > 0 ? 'visible' : 'hidden' }}>
                            <FaTint className='rain' />{n.day['daily_chance_of_rain']}%
                        </div>
                        <div>
                            <span className='transparent'>{Math.round(n.day[`mintemp_${tempUnit}`])}°</span>/
                            {Math.round(n.day[`maxtemp_${tempUnit}`])}°
                        </div>

                    </div>
                )}
            </div>
        </div>
    )
}

export default Daily
