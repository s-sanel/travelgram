import React from 'react';
import NavBar from '../navigation/nav_bar';
import UserProfileDetails from './user_profile_details';
import UserProfilePosts from './user_profile_posts';


class EditProfile extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount(){

  }

  componentWillReceiveProps(newProps){

  }



  render() {
    return (
      <div className="data-root">
        <NavBar />
        <div className="edit-profile-main">
          <article className="border edit-profile-article">
            <div className="edit-profile-navigation">
              Edit Profile
            </div>
            <div className="edit-profile-form">
              User: {this.props.user.username}
            </div>
          </article>
        </div>
      </div>
    );
  }

}


export default EditProfile;
