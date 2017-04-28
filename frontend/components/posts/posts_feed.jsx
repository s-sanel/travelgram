import {  withRouter } from 'react-router';
import React from 'react';
import PostItem from './post_item';
import Spinner from '../shared/spinner';


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
    if (this.props.fetching) return  <Spinner />;
    return (
      <section className="posts-feed">
        <h2>&nbsp;</h2>
        <ul>
          {
            this.props.posts.map(post => (
              <PostItem
                key={post.id}
                post={post}
                currentUser={this.props.currentUser}
                user={this.props.user}
                createLike={this.props.createLike}
                deleteLike={this.props.deleteLike}
                createComment={this.props.createComment}
                deleteComment={this.props.deleteComment}
              />
            ))
          }
        </ul>
      </section>
    );
  }
}

export default withRouter(PostsFeed);
