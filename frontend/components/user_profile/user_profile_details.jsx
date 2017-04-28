import React from 'react';
import {Link, withRouter} from 'react-router';
import Spinner from '../shared/spinner';
import FollowContainer from '../follow/follow_container';

class UserProfileDetails extends React.Component {
  constructor(props) {
    super(props);
    this.redirectToEdit = this.redirectToEdit.bind(this);
  }

  componentDidMount(){}
  componentWillReceiveProps(newProps){}

  redirectToEdit(){
    this.props.router.push(`/users/${this.props.user.id}/edit`);
  }

  followingOrEditButton(){
    if(this.props.currentUser){
      if(this.props.user.id == this.props.currentUser.id){
        return(<button onClick={this.redirectToEdit} className="profile-edit-btn">Edit Profile</button>);
      }else {
        return(<FollowContainer />);
      }
    }
  }

  render(){
    let user = this.props.user;
    if (!user.name) return <Spinner />;

    let name = this.props.user ? user.name : "";
    let bio = this.props.user ? user.bio : "";
    let profile_photo = this.props.user ? user.profile_photo : "";

    return(
      <header className="user-profile-header">
        <div className="user-profile-logo">
          <div className="user-profile-img">
            <img src={profile_photo} width="150px" height="150px" title="profile img"/>
          </div>
        </div>
        <div className="user-profile-data">

          <div className="profile-data-username">
            <span className="profile-name">{this.props.user.username}</span>
            {this.followingOrEditButton()}
            <Link className="gear"><i className="fa fa-cog" aria-hidden="true"></i></Link>
          </div>

          <div className="profile-data-stats">
            <div className="profile-data-stats-data">
              {this.props.posts.length} posts
            </div>
            <div className="profile-data-stats-data">
              {this.props.user.followers.length} followers
            </div>
            <div className="profile-data-stats-data">
              {this.props.user.followees.length} following
            </div>
          </div>

          <div className="profile-data-stats">
            <div className="profile-data-stats-data">
              {name}
            </div>
            <div className="profile-data-stats-data">
              {bio}
            </div>

          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(UserProfileDetails);
