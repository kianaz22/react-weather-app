import React from 'react'

const Particle = ({ color,value,Particle }) => {
    return (
        <div>
          <div style={{ fontSize:'1.2em', borderBottom: `2px solid ${color}` }}>{value == 0 ? '-' : value}</div>
          <div>{Particle}</div>
        </div>
    )
}

export default Particle
