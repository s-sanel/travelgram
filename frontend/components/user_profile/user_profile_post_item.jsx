import React from 'react';
import {Link, withRouter} from 'react-router';

class UserProfilePostItem extends React.Component {
  constructor(props) {
    super(props);
    this.profilePage = this.profilePage.bind(this);
  }

  profilePage(){
    let id = this.props.post.user.id;
    this.props.router.push(`/${id}`);
  }

  render(){
    return(
      <div className="user-profile-image-holder">
        <a className="container-image">
          <img className="img-wrap" src={this.props.post.url} alt={this.props.post.url} height="100%" width="100%"/>
          <div className="user-profile-image-holder-data">
            <i className="fa fa-comment" aria-hidden="true"></i> {this.props.post.comments.length} &nbsp;
            <i className="fa fa-heart" aria-hidden="true"></i> {this.props.post.likes.length}
          </div>
        </a>
      </div>
    );
  }
}

export default withRouter(UserProfilePostItem);
