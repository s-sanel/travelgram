import React from 'react';
import {Link, withRouter} from 'react-router';

class UserProfilePostItem extends React.Component {
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
      <div className="user-profile-image-holder">
        <a>
          <img className="" src={this.props.post.url} alt={this.props.post.url} height="100%" width="100%"/>
        </a>
      </div>
    );
  }
}

export default withRouter(UserProfilePostItem);
