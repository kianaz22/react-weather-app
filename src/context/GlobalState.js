import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  data : "",
  city: "",
  tempUnit : "c",
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function setTempUnit(tempUnit) {
    dispatch({
      type: "SET_TEMP_UNIT",
      payload: tempUnit,
    });
  }

  function setCity(city) {
    dispatch({
      type: "SET_CITY",
      payload: city,
    });
  }

  function addTask(task) {
    dispatch({
      type: "ADD_TASK",
      payload: task,
    });
  }

  function changeStatus(id, newStatus) {
    dispatch({
      type: "CHANGE_STATUS",
      payload: { id, newStatus },
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        tempUnit: state.tempUnit,
        city:state.city,
        setCity,
        addTask,
        changeStatus,
        setTempUnit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
