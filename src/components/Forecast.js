import React from 'react'

const Forecast = ({ data }) => {
    const hours = data.forecast.forecastday[0]['hour']
    const hours2 = data.forecast.forecastday[1]['hour']

    const n = new Date(data.location.localtime)
    const now = n.getHours()

    return (
        <div>
            <div className='today'>
                <h2>next 24 hours</h2>
                <div className='hourly'>

                    {hours.map((hr, i) =>
                        <div key={i}>
                            <div>{i === now ? 'Now' : (i === 12 ? '12PM' : (i < 12 ? i + 'AM' : (i - 12) + 'PM'))}</div>
                            <div><img alt='condition' src={hr.condition.icon} /></div>
                            <div>{Math.round(hr['temp_c'])}°</div>
                        </div>).filter((hr, i) => i >= now)}
                    {hours2.map((hr, i) =>
                        <div key={i}>
                            <div>{i === 12 ? '12PM' : (i === 0 ? '12AM' : (i < 12 ? i + 'AM' : (i - 12) + 'PM'))}</div>
                            <div><img alt='condition' src={hr.condition.icon} /></div>
                            <div>{Math.round(hr['temp_c'])}°</div>
                        </div>).filter((hr, i) => i < now)}

                </div>
            </div>
        </div>
    )
}

export default Forecast
