import React from 'react';
import NavBar from '../navigation/nav_bar';
import UserProfileDetails from './user_profile_details';
import UserProfilePosts from './user_profile_posts';
import Spinner from '../shared/spinner';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount(){
    this.props.fetchPosts();
    this.props.fetchUser(parseInt(this.props.params.user_id));
  }

  componentWillReceiveProps(newProps){
    if(this.props.params.user_id !== newProps.params.user_id){
      this.props.fetchPosts();
      this.props.fetchUser(parseInt(newProps.params.user_id));
    }
  }



  render() {
    if (!this.props.user.name) return (
      <div className="data-root">
        <NavBar />
        <div className="user-profile-main">
          <Spinner />;
        </div>
      </div>
    );

    return (
      <div className="data-root">
        <NavBar />
        <div className="user-profile-main">
          <article className="user-profile-article">
            <UserProfileDetails posts={this.props.posts} user={this.props.user} currentUser={this.props.currentUser} fetchUser={this.props.fetchUser}/>
            <UserProfilePosts posts={this.props.posts}/>
          </article>
        </div>
      </div>
    );
  }

}


export default UserProfile;
