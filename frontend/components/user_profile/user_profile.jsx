import React from 'react';
import NavBar from '../navigation/nav_bar';
import UserProfileDetails from './user_profile_details';
import UserProfilePosts from './user_profile_posts';


class UserProfile extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount(){
    // debugger
    console.log("profile mounted");
    this.props.fetchPosts();
    this.props.fetchUser(parseInt(this.props.params.user_id));
  }

  componentWillReceiveProps(newProps){
    console.log("profile receive props");
    // debugger
    if(this.props.params.user_id !== newProps.params.user_id){
      this.props.fetchPosts();
      this.props.fetchUser(parseInt(newProps.params.user_id));
    }
  }



  render() {
    // debugger
    return (
      <div className="data-root">
        <NavBar />
        <div className="user-profile-main">
          <article className="user-profile-article">
            <UserProfileDetails user={this.props.user} currentUser={this.props.currentUser}/>
            <UserProfilePosts posts={this.props.posts}/>
          </article>
        </div>
      </div>
    );
  }

}


export default UserProfile;
