const AppReducer = (state, action) => {
  switch (action.type) {
    case "SET_TEMP_UNIT":
      return {
        ...state,
        tempUnit: action.payload,
      };
    case "SET_CITY":
      return {
        ...state,
        city: action.payload,
      };
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "CHANGE_STATUS":
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.payload.id)
            task.status = action.payload.newStatus;
          return task;
        }),
      };
    default:
      return state;
  }
};

export default AppReducer;
