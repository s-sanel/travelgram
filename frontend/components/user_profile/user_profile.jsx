import React from 'react';
import NavBar from '../navigation/nav_bar';
import UserProfileDetails from './user_profile_details';
import UserProfilePosts from './user_profile_posts';


class UserProfile extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount(){
    this.props.fetchPosts();
    this.props.fetchUser(this.props.params.user_id);
  }

  componentWillReceiveProps(newProps){
    if(this.props.params.id != newProps.params.id){
      this.props.fetchPosts();
    }
  }

  render() {
    // debugger
    return (
      <div className="data-root">
        <NavBar />
        <div className="user-profile-main">
          <article className="user-profile-article">
            <UserProfileDetails user={this.props.user}/>
            <UserProfilePosts posts={this.props.posts}/>
          </article>
        </div>
      </div>
    );
  }

}


export default UserProfile;
