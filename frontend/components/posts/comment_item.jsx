import React from 'react';
import { Link } from 'react-router';

class CommentItem extends React.Component {
  constructor(props){
    super(props);
    this.deleteComment = this.deleteComment.bind(this);
  }

  deleteComment(){
    this.props.deleteComment(this.props.comment.id)
  }

  renderDeleteComment(){
    if(this.props.comment.user_id == this.props.currentUser.id){
      return <Link className="delete-comment" onClick={this.deleteComment}> X </Link>;
    }
  }

  render(){

    return(
      <li className="comment-item">
        <span className="bold">{this.props.comment.username}</span> {this.props.comment.body}
        {this.renderDeleteComment()}
      </li>
    );

  }

}

// const CommentItem = (props) => (
//   <li>
//     {props.comment.username}: {props.comment.body}
//   </li>
// );

// <Link to={`/pokemon/${item.pokemon_id}/item/${item.id}`}>
// <img src={item.image_url} alt={item.name}/>
// </Link>
export default CommentItem;
