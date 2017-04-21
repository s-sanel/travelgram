import React from 'react';
import NavBar from './navigation/nav_bar';

const Test = ({ children }) => (

  <div className="data-root">
    <NavBar />
    <div className="border">
      <h2>User profile page</h2>
    </div>
  </div>
);

export default Test;
