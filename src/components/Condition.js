import React from 'react'

const Condition = ({ icon, data, text, bgColor }) => {
    return (
        <div>
            <div className='icon-wrapper'
                style={{ backgroundColor: bgColor }}>
                {icon}
            </div>
            <div className='condition-data'>
                <div>{data}</div>
                <div>{text}</div>
            </div>
        </div>
    )
}

export default Condition
