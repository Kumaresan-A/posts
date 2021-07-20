import React, { useState } from 'react';
import { connect } from "react-redux";
import { useDispatch } from 'react-redux'

const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const onTitleChanged = (e) => setTitle(e.target.value)
  const onContentChanged = (e) => setContent(e.target.value)

  const dispatch = useDispatch()

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch({type: "ADD_NEW_POST"}, {"id":0, "title": title, "content": content})
      setTitle('')
      setContent('')
    }
  }

  const canSave = Boolean(title) && Boolean(content) 

  return (
    <div class="col-md-12 top-border">
      <h2>Add a New Post</h2>
      <form className="row">
        <div className="col-md-12 d-flex">
          <label className="col-md-2" htmlFor="postTitle">Post Title:</label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            className="custom-input"
            placeholder="What's on your mind?"
            value={title}
            onChange={onTitleChanged}
          />
        </div>
        
        <div className="col-md-12 d-flex">
          <label className="col-md-2" htmlFor="postContent">Content:</label>
          <textarea
            id="postContent"
            name="postContent"
            className="custom-input"
            value={content}
            onChange={onContentChanged}
          />
        </div>

        <div className="col-md-12 d-flex top-border mt-2 justify-content-end">
          <button type="button" className="btn btn-primary float-right my-2" onClick={onSavePostClicked} disabled={!canSave}>
            Save Post
          </button>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    fetchPostDetails: state.postDetails
  }
}

const mapDispatchToProps = (dispacth) => {
  return {
    addNewPost: (formObject) => dispacth({type: "ADD_NEW_POST"}, formObject)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPostForm);