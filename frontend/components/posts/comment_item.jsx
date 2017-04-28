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
    if(this.props.currentUser){
      if(this.props.comment.user_id == this.props.currentUser.id){
        return <Link className="delete-comment" title="Delete comment" onClick={this.deleteComment}> <i className="fa fa-times" aria-hidden="true"></i> </Link>;
      }
    }
  }

  render(){
    return(
      <li className="comment-item">
        <div className="comment-item-data">
          <span className="bold">{this.props.comment.username}</span> {this.props.comment.body}
        </div>
        {this.renderDeleteButton()}
      </li>
    );
  }
}

export default CommentItem;
