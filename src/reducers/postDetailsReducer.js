export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POST_DETAILS":
      return [...state, action.payload];
    default:
      return state;
  }
};
