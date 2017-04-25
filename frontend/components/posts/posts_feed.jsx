import {  withRouter } from 'react-router';
import React from 'react';
import PostItem from './post_item';


class PostsFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchPosts();
  }

  componentWillReceiveProps(newProps){
    if(!newProps.currentUser){
      this.props.router.push("/signup");
    }
  }

  render() {
    return (
      <section className="posts-feed">
        <h1>Posts feed</h1>
        <ul>
          {
            this.props.posts.map(post => (
              <PostItem
                key={post.id}
                post={post}
                currentUser={this.props.currentUser}
                createLike={this.props.createLike}
                deleteLike={this.props.deleteLike}
              />
            ))
          }
        </ul>
      </section>
    );
  }
}

export default withRouter(PostsFeed);
