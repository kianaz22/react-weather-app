import React from 'react'

const Condition = ({ icon, data, text, bgColor }) => {
    return (
        <div className='condition'>
            <div className='icon-wrapper'
                style={{ backgroundColor: bgColor }}>
                {icon}
            </div>
            <div className='condition-data'>
                <div>{data}</div>
                <div className='label'>{text}</div>
            </div>
        </div>
    )
}

export default Condition
