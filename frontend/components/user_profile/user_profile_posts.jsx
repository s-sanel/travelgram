import React from 'react';
import {Link} from 'react-router';
import UserProfilePostItem from './user_profile_post_item';

class UserProfilePosts extends React.Component {
  constructor(props) {
    super(props);
  }


  render(){
    return(
      <div className="user-profile-gallery">
        {
          this.props.posts.reverse().map(post => (
            <UserProfilePostItem
              key={post.id}
              post={post} />
          ))
        }
      </div>
    );
  }
}

export default UserProfilePosts;
