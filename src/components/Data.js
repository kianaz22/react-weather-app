import React from 'react'
import Hourly from './Hourly'
import Daily from './Daily'
import Conditions from './Conditions'

const Data = ({ data,tempUnit }) => {
    return (
        <div className='data'>
            <Hourly data={data} tempUnit={tempUnit} />
            <div className='flex-wrapper'>
                <Daily data={data} tempUnit={tempUnit} />
                <Conditions data={data} tempUnit={tempUnit} />
            </div>

        </div>
    )
}

export default Data
