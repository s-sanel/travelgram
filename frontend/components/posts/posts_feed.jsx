// import {  withRouter } from 'react-router';
import React from 'react';
import PostItem from './post_item';


class PostsFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchPosts();
  }

  render() {
    // debugger
    return (
      <section className="posts-feed">
        <h1>Posts feed</h1>
        <ul>
          {
            this.props.posts.reverse().map(post => (
              <PostItem
                key={post.id}
                post={post}

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

export default PostsFeed;
