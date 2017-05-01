import React from 'react';
import {Link, withRouter} from 'react-router';
import CommentItem from './comment_item';
import AddCommentForm from './add_comment_form';

class PostItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { comment_count: 3}
    this.profilePage = this.profilePage.bind(this);
    this.likeAction = this.likeAction.bind(this);
    this.showMoreComments = this.showMoreComments.bind(this);
    this.incrementCommentCount = this.incrementCommentCount.bind(this);
  }

  componentDidMount(){}

  componentWillReceiveProps(newProps){
    debugger
  }

  profilePage(){
    let id = this.props.post.user.id;
    this.props.router.push(`users/${id}`);
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
    } else {
      this.props.createLike(this.props.post.id);
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

  showMoreComments(){
    debugger
    let current = this.state.comment_count;
    this.setState({comment_count: current + 5 });
  }

  incrementCommentCount(){
    debugger
    let current = this.state.comment_count;
    this.setState({comment_count: current+1})
  }

  renderShowMoreComments(){
    if (this.props.post.comments.length > this.state.comment_count){
      return(
        <li className="">
          <Link onClick={this.showMoreComments} className="load-more-comments">load more comments...</Link>
        </li>
      )
    }
  }

  render(){
    let post_id = this.props.post.id;
    let comm = "input-comment-" + post_id;
    let start = this.props.post.comments.length - this.state.comment_count;
    if (start < 0) start = 0;
debugger
    return(
      <article className="post-box">
        <header className="post-header">
          <Link onClick={this.profilePage} className="">
            <img src={this.props.post.user.profile_photo} alt="img" className="img-circle" width="30px" height="30px" />
          </Link> &nbsp;
          <div className="post-header-data">
            <Link onClick={this.profilePage} className="gray-link">
              {this.props.post.user.username}
            </Link>
          </div>
        </header>

        <div className="post-image-holder" onDoubleClick={this.likeAction}>
          <img className="responsive-image" src={this.props.post.url} alt={this.props.post.url} height="300px" width="100%"/>
        </div>

        <div className="post-footer">
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

          <div>
            <span className="bold">{this.props.post.user.username}</span>  {this.props.post.description}
          </div>

          <section className="post-footer-items">
            <ul>
              {this.renderShowMoreComments()}
              {
                this.props.post.comments.slice(start, this.props.post.comments.length).map( comment => (
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

          <section className="post-footer-time-ago">
            {this.props.post.created_ago} ago
          </section>

          <AddCommentForm
            post={this.props.post}
            createComment={this.props.createComment}
            incrementCommentCount={this.incrementCommentCount}
          />


        </div>
      </article>
    );

  }
}

export default withRouter(PostItem);
