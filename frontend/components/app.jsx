import React from 'react';
import GreetingContainer from './greeting/greeting_container'
import Footer from './shared/footer'


const App = ({ children }) => (
  <section id="root">
    <section>
      { children }
    </section>

    <Footer />
  </section>
);

// <GreetingContainer />
export default App;
