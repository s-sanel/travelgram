import React from 'react';
import NavBar from '../navigation/nav_bar';
import UserProfileDetails from './user_profile_details';
import UserProfilePosts from './user_profile_posts';
import Spinner from '../shared/spinner';
import PostItemModalContainer from '../posts/modal/post_item_modal_container';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount(){
    if(!this.props.posts){
      this.props.fetchPosts();
    }
    this.props.fetchUser(parseInt(this.props.params.user_id));
  }

  componentWillReceiveProps(newProps){
    if(this.props.params.user_id != newProps.params.user_id){
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
            <UserProfileDetails
              posts={this.props.posts}
              user={this.props.user}
              currentUser={this.props.currentUser}
              updateUser={this.props.updateUser}
              fetchUser={this.props.fetchUser}/>

              <div className="user-profile-gallery">
                {
                  this.props.posts.reverse().map(post => (
                    <PostItemModalContainer
                      key={post.id}
                      post={post} />
                  ))
                }
              </div>
          </article>
        </div>
      </div>
    );
  }

}


export default UserProfile;
