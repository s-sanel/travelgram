import React from 'react';
import {Link, withRouter} from 'react-router';

class PostItem extends React.Component {
  constructor(props) {
    super(props);
    this.profilePage = this.profilePage.bind(this);
  }

  profilePage(){
    // debugger
    let id = this.props.post.user.id;
    this.props.router.push(`/${id}`);
  }

  render(){
    return(
      <article className="post-box">
        <header className="post-header">
          <Link to="" className="">
            <img src={this.props.post.url} alt="img" className="img-circle" width="30px" height="30px" />
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
            <a href="">
              <i className="fa fa-heart-o" aria-hidden="true"></i>
            </a>
            <a href="">
              <i className="fa fa-comment-o" aria-hidden="true"></i>
            </a>
          </section>

          <section className="post-footer-likes">
            num likes
          </section>

          <div>
            {this.props.post.user.username} - {this.props.post.description}
          </div>

          <section className="post-footer-items">
            <ul>
              comments...
            </ul>
          </section>

          <section className="post-footer-items">
            time ago...
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
