import React from 'react';
import Footer from './shared/footer'

const App = ({ children }) => (
  <section id="root">
      { children }
    <Footer />
  </section>
);

export default App;
