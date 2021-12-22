import moment from 'moment'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState.js";

const Hourly = () => {
    const { tempUnit, data } = useContext(GlobalContext)

    const hours = data.forecast.forecastday[0]['hour']
    const hours2 = data.forecast.forecastday[1]['hour']

    const now = moment(data.location.localtime, 'YYYY-MM-DD HH:mm').format('HH')

    const scrollRight = () => {
        if (document.querySelector('.hourly')) {
            const hourly = document.querySelector('.hourly')
            hourly.scrollLeft += 450
        }
    }
    const scrollLeft = () => {
        if (document.querySelector('.hourly')) {
            const hourly = document.querySelector('.hourly')
            hourly.scrollLeft -= 450
        }
    }
    return (

        <div className='hourly-container'>
            <div className='scroll-container'>
                <button onClick={scrollLeft}><FaChevronLeft /></button>
                <div className='hourly'>
                    {hours.map((hr, i) =>
                        <div className='hour' key={i}>
                            <div><img alt='condition' src={hr.condition.icon} /></div>
                            <div className='temp'>{Math.round(hr[`temp_${tempUnit}`])}°</div>
                            <div className='time'>{i === now ? 'Now' : (i === 12 ? '12PM' : (i < 12 ? i + 'AM' : (i - 12) + 'PM'))}</div>
                        </div>).filter((hr, i) => i >= now)}
                    {hours2.map((hr, i) =>
                        <div className='hour' key={i}>
                            <div><img alt='condition' src={hr.condition.icon} /></div>
                            <div className='temp'>{Math.round(hr[`temp_${tempUnit}`])}°</div>
                            <div className='time'>{i === 12 ? '12PM' : (i === 0 ? '12AM' : (i < 12 ? i + 'AM' : (i - 12) + 'PM'))}</div>
                        </div>).filter((hr, i) => i < now)}
                </div>
                <button onClick={scrollRight}><FaChevronRight /></button>
            </div>
        </div>
    )
}

export default Hourly
