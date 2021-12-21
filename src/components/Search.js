import React, { useContext, useState } from 'react'
import { FaSearch,FaTimes } from 'react-icons/fa'
import { GlobalContext } from '../context/GlobalState'

const Search = ({ fetchData }) => {

    const [matches, setMatches] = useState([])
    const [clas, setClas] = useState('no-border')
    const { city,setCity, data } = useContext(GlobalContext)

    const handleChange = (text) => {
        if (text.length > 3) {
          fetch(`https://weatherapi-com.p.rapidapi.com/search.json?q=${text}`, {
            "method": "GET",
            "headers": {
              "x-rapidapi-key": "3927819375mshd44cfb360819a63p12aeabjsn863dc422f8df",
              "x-rapidapi-host": "weatherapi-com.p.rapidapi.com"
            }
          })
            .then(res => res.json())
            .then(res => {
              setMatches(res)
            })
        }
        else setMatches([]) 
        setCity(text)
      }
      const handleClick = (e) => {
        setCity(e.target.textContent)
        fetchData(e.target.textContent)
        setMatches([])
        setTimeout(() => {
          setCity('')
        }, 2000);
      }
      const handleBlur = (e) => {
        setCity('')
        setTimeout(() => {
          setMatches([])
        }, 200);
      }

    return (
        <div className='search-container' >
            <button className='search-button' onClick={() => setClas(clas==='border' ? 'no-border' : 'border')} >
                <FaSearch className='icon' size={15} />
            </button>
            <div className='search' >
                <input type='text' value={city} placeholder={`${data.location.name}, ${data.location.country}`}
                      className={clas} onChange={e => handleChange(e.target.value)} onBlur={()=>handleBlur()} />
                <button className='clear-button' onClick={()=>handleBlur()}><FaTimes size={13}/></button>
                {matches && <div className='matches-container'>{matches.map((m, i) =>
                    <div onClick={e => handleClick(e)}
                        key={i}>{m.name}</div>)}
                </div>}
            </div>
        </div>
    )
}

export default Search
