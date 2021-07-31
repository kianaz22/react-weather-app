import React from 'react'
import { FaChevronRight,FaChevronLeft } from 'react-icons/fa'
const Hourly = ({ data,tempUnit }) => {
    const hours = data.forecast.forecastday[0]['hour']
    const hours2 = data.forecast.forecastday[1]['hour']

    const n = new Date(data.location.localtime)
    const now = n.getHours()


    const scrollRight = () => {
        if(document.querySelector('.hourly')) {
            const hourly = document.querySelector('.hourly')
            hourly.scrollLeft += 450
        }
    }
    const scrollLeft = () => {
        if(document.querySelector('.hourly')){
            const hourly = document.querySelector('.hourly')
            hourly.scrollLeft -= 450
        }
    }
    return (
        <div>
            <div className='hourly-container'>
                <h2>Hourly</h2>
                <div className='scroll-container'>
                    <button onClick={scrollLeft} ><FaChevronLeft /></button>
                    <div className='hourly'>
                        {hours.map((hr, i) =>
                            <div key={i}>
                                <div><img alt='condition' src={hr.condition.icon} /></div>
                                <div>{Math.round(hr[`temp_${tempUnit}`])}°</div>
                                <div>{i === now ? 'Now' : (i === 12 ? '12PM' : (i < 12 ? i + 'AM' : (i - 12) + 'PM'))}</div>
                            </div>).filter((hr, i) => i >= now)}
                        {hours2.map((hr, i) =>
                            <div key={i}>
                                <div><img alt='condition' src={hr.condition.icon} /></div>
                                <div>{Math.round(hr[`temp_${tempUnit}`])}°</div>
                                <div>{i === 12 ? '12PM' : (i === 0 ? '12AM' : (i < 12 ? i + 'AM' : (i - 12) + 'PM'))}</div>
                            </div>).filter((hr, i) => i < now)}
                    </div>
                    <button onClick={scrollRight} ><FaChevronRight /></button>

                </div>



            </div>
        </div>
    )
}

export default Hourly
