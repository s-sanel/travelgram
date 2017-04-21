import React from 'react';
import NavBar from '../navigation/nav_bar';
import PostItem from '../posts/post_item';



class UserProfile extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount(){
    this.props.fetchPosts();
  }

  render() {
    
    return (
      <div className="data-root">
        <NavBar />
        <div className="">
          <h2>User profile page</h2>
          <div className="test-profile-page-images">
            {
              <ul>
              {
                this.props.posts.map(post => (
                  <PostItem
                    key={post.id}
                    post={post} />
                ))
              }
              </ul>
            }
          </div>
        </div>
      </div>
    );
  }

}


export default UserProfile;
