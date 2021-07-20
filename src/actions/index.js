import axios from "../apis/jsonPlaceHolder";
// import _ from "lodash";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  await dispatch(fetchAllUser());
};

export const fetchPosts = () => async dispatch => {
  const response = await axios.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: response.data
  });
};

export const fetchAllUser = () => async dispatch => {
  const response = await axios.get(`/users`);
  dispatch({
    type: "FETCH_ALL_USER",
    payload: response.data
  });
};

export const fetchUser = id => async dispatch => {
  const response = await axios.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: response.data
  });
};

export const fetchPostDetails = id => async dispatch => {
  const response = await axios.get(`/posts/${id}`);
  dispatch({
    type: "FETCH_POST_DETAILS",
    payload: response.data
  })
}

export const getCommendsFrom_Api = (id) => async dispatch => {
  const response = await axios.get(`/posts/${id}/comments`)
  dispatch({
    type: "FETCH_COMMENTS_FROM_API",
    payload: response.data
  })
}

export const fetchComments = () => (dispatch, getState) => {
  dispatch({
    type: "FETCH_COMMENTS",
    payload: getState
  })
}

export const clearComments = () => dispatch => {
  dispatch({
    type: "CLEAR_COMMENTS"
  })
}

export const postIdReducer = () => (dispatch, getState) => {
  dispatch({
    type: "FETCH_POST_ID",
    payload: getState
  })
}

export const saveSelectedPostId = (postId) => (dispatch) => {
  dispatch({
    type: "SAVE_SELECTED_POST_ID",
    payload: postId
  })
}

export const addNewPost = (formObject) => async dispatch => {
  const response = await axios.post("posts/", formObject);
  dispatch({
    type: "ADD_NEW_POST",
    payload: response.data
  })
}

export const addNewComments = (formObject) => async dispatch => {
  const response = await axios.post("posts/", formObject);
  dispatch({
    type: "ADD_NEW_COMMENTS",
    payload: response.data
  })
}

