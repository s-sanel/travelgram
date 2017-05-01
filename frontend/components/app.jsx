import React from 'react';
// import GreetingContainer from './greeting/greeting_container'
import Footer from './shared/footer'


const App = ({ children }) => (
  <section id="root">
      { children }
    <Footer />
  </section>
);

export default App;
