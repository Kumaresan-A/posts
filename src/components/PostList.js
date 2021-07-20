import React from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers, saveSelectedPostId, getCommendsFrom_Api, clearComments } from "../actions";

import UserHeader from "./UserHeader";
import Comments from "./comments";
import AddPostForm from "./AddPostForm";
import { bindActionCreators } from 'redux';

class Postlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      expandCommentId: 0,
      searchTerm: "",
      isShowAddPost: false
    }
  }

  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  collapseComment(postId) {
    this.setState({ expandCommentId: postId });
    this.props.clearComments();
    this.props.saveSelectedPostId(postId);
    this.props.getCommendsFrom_Api(postId);
  }

  fillterPosts = (data = {posts: []}) => {
    var returnPosts = [];
    let searchTerm = new RegExp(this.state.searchTerm)
    returnPosts = data.filter( (item) => {
      var result = item.title.match(searchTerm)
      if( result )
        return true;
      return false;
    })
    return returnPosts;
}

  render() {
    return (
      <div className="ui relaxed divided list">
        <div className="col-md-12 d-flex justify-content-between">
          <h1 className="p-2">Post</h1>
          <div className="valign-center">
            <div className="form-inline my-search input-group input-group-sm mr-2" style={{ width: "250px" }}>
                <input type="text" style={{ background: "white" }} placeholder="Search" value={this.state.searchTerm} onChange={(e) => { this.setState({ searchTerm: e.target.value }) }} className="form-control form-control-sm" />
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
              </div>
              <button className="btn btn-primary btn-sm" onClick={() => this.setState({ isShowAddPost: !this.state.isShowAddPost })} type="button">Add New Post</button>
          </div>
        </div>
        { this.showHideAddPost() }
        <div className="top-border">
          {this.renderList()}
        </div>
      </div>
    );
  }

  renderList() {
    return this.fillterPosts(this.props.posts, this.state.searchTerm).map(post => (
      <div className="item top-border" key={post.id}>
        <div className="col-md-12 d-flex align-items-center">
          <i className="fa fa-user mr-2" aria-hidden="true" style={{ fontSize: '30px' }}></i>
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>

        {this.commentAndLike(post)}
        <Comments post={post} expandCommentId={this.state.expandCommentId} />
      </div>
    ));
  }

  commentAndLike(post) {
    return <div className="p-2 mt-2 top-border">
      <div className="col-12 d-flex">
        <div className="col-4 valign-center">
          <p className="cursor-pointer">
            <i className="fas fa-thumbs-up mr-1"></i>Like
          </p>
        </div>
        <div className="valign-center">
          <p className="cursor-pointer" onClick={() => this.collapseComment(post.id) }>
            <i className="fa fa-comments mr-1" aria-hidden="true"></i>Comment
          </p>
        </div>
      </div>
    </div>
  }

  showHideAddPost() {
    if( this.state.isShowAddPost )
      return <div> <AddPostForm /> </div>
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

// const saveSelectedPost = (postId) => ({type: "SAVE_SELECTED_POST_ID"})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPostsAndUsers, saveSelectedPostId, getCommendsFrom_Api, clearComments }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Postlist);
