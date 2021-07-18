import React from 'react'
import Current from './Current'
import Forecast from './Forecast'
import NextDays from './NextDays'

const Data = ({ data }) => {
    return (
        <div>
            <Current data={data} />
            <Forecast data={data} />
            <NextDays data={data} />
        </div>
    )
}

export default Data
