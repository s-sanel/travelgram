import React from 'react';
import {Link, withRouter} from 'react-router';

class PostItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {liked: false};
    this.profilePage = this.profilePage.bind(this);
    this.likeAction = this.likeAction.bind(this);
  }

  componentDidMount(){
    if(this.isLikedByUser()){
      this.setState({liked: true});
    }else {
      this.setState({liked: false});
    }
  }

  profilePage(){
    let id = this.props.post.user.id;
    this.props.router.push(`users/${id}`);
  }

  isLikedByUser(){
    let res = this.props.post.likes.find( like => {
      return like.user_id == this.props.currentUser.id;
    });
    let val = (res) ? true : false;
    return val;
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
      return "fa fa-heart";
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

    return(
      <article className="post-box">
        <header className="post-header">
          <Link to="" className="">
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
              comments...
            </ul>
          </section>

          <section className="post-footer-time-ago">
            {this.props.post.created_ago} ago
          </section>

          <section className="post-footer-items add-comment">
            <form className="add-comment-form">
              <input type="text" className="input-comment" id={comm} placeholder="Add a comment..."/>
              <input type="submit" value="POST" className="add-comment-submit"/>
            </form>
          </section>
        </div>
      </article>
    );

  }
}

export default withRouter(PostItem);
