import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";
import commentReducer from "./commentReducer";
import postIdReducer from "./postIdReducer";
import postDetailsReducer from "./postDetailsReducer";

export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
  comments: commentReducer,
  selectedPostId: postIdReducer,
  postDetailsReducer: postDetailsReducer
});
