import React from 'react';
import GreetingContainer from './greeting/greeting_container'


const App = ({ children }) => (
  <div>
    <h1>Welcome to travelgram</h1>
    <GreetingContainer />
    <hr />
    { children }
  </div>
);

export default App;
