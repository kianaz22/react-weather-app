import React from 'react'

const Current = ({ data }) => {
    return (
        <div className='current'>
            <div className='location'>
                <h3>{data.location.name}, {data.location.region}, {data.location.country}</h3>
                <p>{data.location.localtime}</p>
            </div>
            <div className='current-temp'>
                <div className='icon' style={{backgroundImage : "url(" + data.current.condition.icon + ")" }} />
                <div>
                    <h1>{data.current['temp_c']}°</h1>
                    <p>{data.current.condition.text}</p>
                </div>
            </div>
            <div className='current-conditions'>
                <div>
                    <p>{data.forecast.forecastday[0].day['maxtemp_c']}°</p>
                    <p>High</p>
                </div>
                <div>
                    <p>{data.current['wind_kph']}</p>
                    <p>Wind</p>
                </div>
                <div>
                    <p>{data.forecast.forecastday[0].astro.sunrise}</p>
                    <p>Sunrise</p>
                </div>
                <div>
                    <p>{data.forecast.forecastday[0].day['mintemp_c']}°</p>
                    <p>Low</p>
                </div>
                <div>
                    <p>{data.forecast.forecastday[0].day['daily_chance_of_rain']}%</p>
                    <p>Rain</p>
                </div>
                <div>
                    <p>{data.forecast.forecastday[0].astro.sunset}</p>
                    <p>Sunset</p>
                </div>
            </div>
        </div>
    )
}

export default Current
