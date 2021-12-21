import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const TempUnit = () => {
    const { tempUnit, setTempUnit } = useContext(GlobalContext)

    return (
        <div className="temp-unit">
              <button
                className={tempUnit === "f" ? "active" : ""}
                onClick={() => setTempUnit("f")}
              >
                F
              </button>
              <button
                className={tempUnit === "c" ? "active" : ""}
                onClick={() => setTempUnit("c")}
              >
                C
              </button>
            </div>
    )
}

export default TempUnit
