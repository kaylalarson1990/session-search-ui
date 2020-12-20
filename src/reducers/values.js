export const valuesReducer = (state = [], action) => {
  switch (action.type) {
    case "VALUES":
      return action.values;
    default:
      return state;
  }
}