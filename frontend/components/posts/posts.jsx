import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import SearchContainer from '../search/search_container';
import PostsFeedContainer from './posts_feed_container';
import PostsFeed from './posts_feed';

const Posts = ({ children }) => (
  <div className="data-root">

    <div className="nav-bar">
      <div className="main-nav-bar-max-width">
        <nav className="main-nav-bar">
          <div className="main-nav-logo">
            <i className="fa fa-instagram" aria-hidden="true"></i>
            <div className="main-nav-logo-text">Travelgram</div>
          </div>
          <SearchContainer />
          <GreetingContainer />
        </nav>
      </div>

  </div>

    <main className="main-content">
      <PostsFeedContainer />
    </main>

  </div>
);

// <PostsFeed />
export default Posts;
