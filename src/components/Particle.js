import React from 'react'

const Particle = ({ color,value,Particle }) => {
    return (
        <div className='particle'>
          <div style={{ fontSize:'1.2em', borderBottom: `2px solid ${color}` }}>{value}</div>
          <div>{Particle}</div>
        </div>
    )
}

export default Particle
