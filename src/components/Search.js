import React, { useState } from 'react'
import { FaSearch,FaTimes } from 'react-icons/fa'
const Search = ({ city,handleChange,matches,handleClick,handleBlur,data }) => {
    const [clas, setClas] = useState('zero')
   
    return (
        <div className='search-container' >
            <button className='search-button' onClick={() => {clas==='full' ? setClas('zero') : setClas('full')}} >
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
