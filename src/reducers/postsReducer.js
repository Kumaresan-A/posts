export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return state = action.payload;
    case "SAVE_POSTS":
      return state;
    default:
      return state;
  }
};
