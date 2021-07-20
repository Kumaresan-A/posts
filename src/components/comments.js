import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchComments } from "../actions";
import { bindActionCreators } from 'redux';

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      selectedPostId: 0
    };
  }

  componentDidMount() {
    
  }

  componentDidCatch() {
    this.props.fetchComments();
  }

  submitComment = (post) => {
    var self = this;
    var {id, userId} = {...post};
    var comment = this.state.comment;
    console.log(id+" - "+userId+" - "+comment);
    self.setState({ comment: "" });
  }

  render() {
    return (
      <div>
        <div key={this.props.post.id} className="top-border mt-2" style={{ display: (this.props.expandCommentId == this.props.post.id)? "block": "none" }}>
          <div className="col-md-12 d-flex valign-center mt-2">
            <i className="pencil alternate icon"></i>
            <input value={this.state.comment} className="custom-input" onChange={e => this.setState({ "comment": e.target.value})} id={"comment"+this.props.post.id} name="comment" placeholder="Comments" type="text" ></input>
            <button className="btn btn-sm btn-primary ml-2" type="submit" onClick={() => this.submitComment(this.props.post) }>Send</button>
          </div>

          <div className="top-border mt-2">
            {this.renderCommentsList()}
          </div>
        </div>
      </div>
    )
  }

  renderCommentsList() {
    return (
      this.props.comments.map( (item, index) => (
        <div key={item.id} className="col-md-12 d-flex align-items-center">
          <i className="fa fa-comments mr-2" aria-hidden="true"></i>
          <div className="description">
            <h4>{item.name}</h4>
            <p>{item.body}</p>
          </div>
        </div>
      ))
    )
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments || [],
    selectedPostId: state.selectedPostId
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchComments }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentSection);
