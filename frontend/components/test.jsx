import React from 'react';
import GreetingContainer from './greeting/greeting_container'
import TestPosts from './test0'

const Test = ({ children }) => (
  <div>
    <h1><i className="fa fa-instagram" aria-hidden="true"></i> Travelgram, Hello Lelo </h1>
    <GreetingContainer />
    <TestPosts />

  </div>
);

export default Test;
