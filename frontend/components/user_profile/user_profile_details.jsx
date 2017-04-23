import React from 'react';
import {Link, withRouter} from 'react-router';

class UserProfileDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount(){
  //   // debugger
  //   this.props.fetchPosts();
  //   this.props.fetchUser(this.props.params.user_id);
  // }
  //
  // componentWillReceiveProps(newProps){
  //   // debugger
  //   if(this.props.params.user_id != newProps.params.user_id){
  //     this.props.fetchPosts();
  //     this.props.fetchUser(parseInt(this.props.params.user_id));
  //   }
  // }

  render(){
    // debugger
    let user = this.props.user;
    let username = this.props.user ? user.username : "";
    let name = this.props.user ? user.name : "";

    return(
      <header className="user-profile-header">
        <div className="user-profile-logo">
          <div className="user-profile-img">
            <img src="" width="150px" height="150px" title="profile img"/>
          </div>
        </div>
        <div className="user-profile-data">
          <div>
          {username} | btn-following/follow/edit
          </div>
          <div>
            no posts | no followers | no following
          </div>
          <div>
            {name} | bio
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(UserProfileDetails);
