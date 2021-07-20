export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_COMMENTS_FROM_API":
      return state = action.payload;
    case "FETCH_COMMENTS":
      return state;
    case "CLEAR_COMMENTS":
      return state = [];
    default:
      return state;
  }
};
