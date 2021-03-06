import { useContext } from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import moment from 'moment'
import { GlobalContext } from "../context/GlobalState.js";

const Current = () => {
    const { tempUnit,data } = useContext(GlobalContext)

    const today = data.forecast.forecastday[0]
    const date = moment(data.location.localtime, 'YYYY-MM-DD HH:mm').format('dddd, MMM DD, YYYY')

    return (
        <div className='current'>

            <div className='temp'>
                <div className='icon'>
                    <img src={data.current.condition.icon} alt='icon' />
                </div>
                <div>
                    <h1>{Math.round(data.current[`temp_${tempUnit}`])}°{tempUnit.toUpperCase()}</h1>
                </div>
            </div>
            <div className='condition'>{data.current.condition.text}</div>
            <div className='date'>{date}</div>
            <div className='min-max'>
                <span><FaCaretUp /> {Math.round(today.day[`maxtemp_${tempUnit}`])}°</span>&nbsp;&nbsp;&nbsp;
                <span><FaCaretDown /> {Math.round(today.day[`mintemp_${tempUnit}`])}°</span>
            </div>

        </div>
    )
}

export default Current
