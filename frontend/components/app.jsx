import React from 'react';
import GreetingContainer from './greeting/greeting_container'


const App = ({ children }) => (
  <div>
    <hr />
    { children }
  </div>
);

// <h1>Welcome to travelgram</h1>
// <GreetingContainer />
export default App;
