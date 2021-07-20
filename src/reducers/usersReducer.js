export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_USER":
      return state = action.payload;
    case "FETCH_USER":
      return state;
    default:
      return state;
  }
};
