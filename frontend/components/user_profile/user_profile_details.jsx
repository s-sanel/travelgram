import React from 'react';
import {Link, withRouter} from 'react-router';

class UserProfileDetails extends React.Component {
  constructor(props) {
    super(props);
    this.redirectToEdit = this.redirectToEdit.bind(this);
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

  redirectToEdit(){
    this.props.router.push(`/users/${this.props.user.id}/edit`);
  }

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

          <div className="profile-data-username">
            <span className="profile-name">{username}</span>
            <button onClick={this.redirectToEdit} className="profile-edit-btn">Edit Profile</button>
            <Link className="gear"><i className="fa fa-cog" aria-hidden="true"></i></Link>
          </div>


          <div className="profile-data-stats">
            <div className="profile-data-stats-data">
              posts
            </div>
            <div className="profile-data-stats-data">
              followers
            </div>
            <div className="profile-data-stats-data">
              following
            </div>
          </div>

          <div className="profile-data-stats">
            <div className="profile-data-stats-data">
              {name}
            </div>
            <div className="profile-data-stats-data">
              Bio...
            </div>

          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(UserProfileDetails);
