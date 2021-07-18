import React from 'react'
import { FaTint,FaAngleUp,FaAngleDown,FaCaretUp,FaCaretDown } from 'react-icons/fa'

const NextDays = ({ data }) => {
    console.log(data)
    const next = data.forecast.forecastday.slice(1)
    next.push(data.forecast.forecastday[1])
    next.push(data.forecast.forecastday[0])
    next.push(data.forecast.forecastday[2])

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
        "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
    const today = new Date(data.location.localtime).getDay()
    const days = dayNames.slice(today + 1, today + 6)

    return (
        <div>
            <h2>next days</h2>
            <div className='next-days'>
                {next.map((n, i) =>
                    <div key={i}>
                        <div>{days[i]}</div>
                        <div>
                            <img alt='condition' src={n.day.condition.icon} />
                        </div>
                        <div style={{ visibility: n.day['daily_chance_of_rain']>10  ? 'visible': 'hidden'}}>
                        <FaTint />{n.day['daily_chance_of_rain']}% 
                        </div>
                        <div>
                            <span><FaCaretUp />{Math.round(n.day['maxtemp_c'])}</span>
                            <span><FaCaretDown />{Math.round(n.day['mintemp_c'])}</span>
                        </div>

                    </div>
                )}
            </div>
        </div>
    )
}

export default NextDays
