import React from 'react';
import {Link, withRouter} from 'react-router';

class PostItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
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
// debugger
    let res = this.props.post.likes.find( like => {
      return like.user_id == currentUser.id;
    });
    let val = (res) ? true : false;
    return val;
  }

  likeAction(){
    debugger
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

  render(){

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

        <div className="post-image-holder">
          <img className="responsive-image" src={this.props.post.url} alt={this.props.post.url} height="300px" width="100%"/>
        </div>

        <div className="post-footer">
          <section className="post-footer-icons">
            <Link onClick={this.likeAction}>
              <i className={this.heartClass()} aria-hidden="true"></i>
            </Link>
            <a href="">
              <i className="fa fa-comment-o" aria-hidden="true"></i>
            </a>
          </section>

          <section className="post-footer-likes">
            {this.props.post.likes.length} likes
          </section>

          <div>
            {this.props.post.user.username} - {this.props.post.description}
          </div>

          <section className="post-footer-items">
            <ul>
              comments...
            </ul>
          </section>

          <section className="post-footer-time-ago">
            {this.props.post.created_ago} ago
          </section>

          <section className="post-footer-items">
            <input type="text" placeholder="Add a comment..."/>
          </section>
        </div>
      </article>
    );

  }
}

export default withRouter(PostItem);
