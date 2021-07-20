export default (state = [], action) => {
  switch (action.type) {
    case "SAVE_COMMENTS":
      return action.payload;
    default:
      return state;
  }
};
