import React from 'react';
import {Link, withRouter} from 'react-router';
import CommentItem from '../comment_item';
import AddCommentForm from '../add_comment_form';
import FollowContainer from '../../follow/follow_container';

class PostItemModalData extends React.Component {
  constructor(props) {
    super(props);
    this.likeAction = this.likeAction.bind(this);
  }

  isLikedByUser(){
    if(this.props.currentUser) {
      let res = this.props.post.likes.find( like => {
        return like.user_id == this.props.currentUser.id;
      });
      let val = (res) ? true : false;
      return val;
    }
  }

  likeAction(){
    if(this.isLikedByUser()){
      this.props.deleteLike(this.props.post.id);
      this.setState({liked: false});
    } else {
      this.props.createLike(this.props.post.id);
      this.setState({liked: true});

    }
  }

  heartClass() {
    if (this.isLikedByUser()){
      return "fa fa-heart red";
    } else {
      return "fa fa-heart-o";
    }
  }

  focusToAddComment(e){
    let id = e.currentTarget.id;
    let el = document.getElementById("input-comment-"+id);
    if(el){
      el.focus();
    }
  }

  render(){
    let post_id = this.props.post.id;
    let comm = "input-comment-" + post_id;
    let followContainer = this.props.post.user_id == this.props.currentUser.id ? "" : <FollowContainer />;

    return(
      <article className="modal-post-holder">

        <div className="modal-post-image" onDoubleClick={this.likeAction}>
          <img className="" width="100%" height="540px" src={this.props.post.url} alt={this.props.post.url} />
        </div>

        <div className="a">

          <div className="modal-post-data">

            <header className="post-header item-header">
              <Link onClick={this.props.closeModal} className="">
                <img src={this.props.post.user_profile_photo} alt="img" className="img-circle" width="40px" height="40px" />
              </Link> &nbsp;
              <div className="post-header-data">
                <Link onClick={this.props.closeModal} className="gray-link">
                  {this.props.post.username}
                </Link>
              </div>
              <div>
                {followContainer}
              </div>
            </header>

            <section className="single-post-footer-items">
              <div>
                <span className="bold">{this.props.post.username}</span>  {this.props.post.description}
              </div>
              <ul className="">
                {
                this.props.post.comments.map( comment => (
                  <CommentItem
                    key={comment.id}
                    comment={comment}
                    currentUser={this.props.currentUser}
                    deleteComment={this.props.deleteComment}
                  />
                ))
                }
              </ul>
            </section>

            <div className="post-footer btm">
              <section className="post-footer-icons">
                <Link onClick={this.likeAction}>
                  <i className={this.heartClass()} aria-hidden="true"></i>
                </Link>
                <Link onClick={this.focusToAddComment} id={post_id}>
                  <i className="fa fa-comment-o" aria-hidden="true"></i>
                </Link>
              </section>
              <section className="post-footer-likes bold">
                {this.props.post.likes.length} likes
              </section>
              <section className="post-footer-time-ago">
                {this.props.post.created_ago} ago
              </section>
              <div className="">
                <AddCommentForm
                  post={this.props.post}
                  createComment={this.props.createComment}/>
              </div>
             </div>




           </div>
        </div>

      </article>


    );

  }
}

export default withRouter(PostItemModalData);
