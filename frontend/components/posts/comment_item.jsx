import React from 'react';
import { Link } from 'react-router';

class CommentItem extends React.Component {
  constructor(props){
    super(props);
    this.deleteComment = this.deleteComment.bind(this);
  }


  deleteComment(){
    this.props.deleteComment(this.props.comment.id);
  }

  renderDeleteButton(){
    if(this.props.comment.user_id == this.props.currentUser.id){
      return <Link className="delete-comment" title="Delete comment" onClick={this.deleteComment}> X </Link>;
    }
  }

  render(){
    return(
      <li className="comment-item">
        <span className="bold">{this.props.comment.username}</span> {this.props.comment.body}
        {this.renderDeleteButton()}
      </li>
    );
  }
}

export default CommentItem;
