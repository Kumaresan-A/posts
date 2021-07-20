export default (state = [], action) => {
  switch (action.type) {
    case "SAVE_POSTS":
      return action.payload;
    default:
      return state;
  }
};
