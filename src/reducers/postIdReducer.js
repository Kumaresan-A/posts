
const INIT_STATE = {
  selectedPostId: 0
}
export default (state = 0, action) => {
  switch (action.type) {
    case "FETCH_POST_ID":
      return state;
    case "SAVE_SELECTED_POST_ID":
      return state = action.payload;
    default:
      return state;
  }
};
