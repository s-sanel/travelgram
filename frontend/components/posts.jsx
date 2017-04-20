import React from 'react';
import GreetingContainer from './greeting/greeting_container'
import SearchContainer from './search/search_container'
import PostsFeed from './posts_feed'

const Posts = ({ children }) => (
  <div className="data-root">
    <nav className="main-nav-bar">
      <div className="main-nav-logo">
        <i className="fa fa-instagram" aria-hidden="true"></i> | Travelgram
      </div>
      <SearchContainer />
      <GreetingContainer />
    </nav>

    <main className="main-content">
      <PostsFeed />
    </main>

  </div>
);

export default Posts;
