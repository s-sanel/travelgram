import React from 'react';
import {Link} from 'react-router';

class UserProfileDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    // debugger
    // this.props.fetchPosts();
    // this.props.fetchUser(this.props.params.user_id);
  }

  render(){
    // debugger
    return(
      <header className="user-profile-header">
        <div className="user-profile-logo">
          <div className="user-profile-img">
            <img src="" width="150px" height="150px" title="profile img"/>
          </div>
        </div>
        <div className="user-profile-data">
          <div>
          uname| btn-following/follow/edit
          </div>
          <div>
            no posts | no followers | no following
          </div>
          <div>
            name | bio
          </div>
        </div>
      </header>
    );
  }
}

export default UserProfileDetails;
