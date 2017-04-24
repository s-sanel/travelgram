import React from 'react';
import NavBar from '../navigation/nav_bar';
import PostsFeedContainer from './posts_feed_container';
import PostsFeed from './posts_feed';

const Posts = ({ children }) => (
  <div className="data-root">
    <NavBar />
    <main className="main-content">
      <PostsFeedContainer />
    </main>

  </div>
);

export default Posts;
