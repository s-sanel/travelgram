import React from 'react';

const Footer = ({ children }) => (
  <footer>
    <div className="footer-content">

      <div className="links">
        <ul className="footer-nav">
          <li>Sanel Selmanovic</li>
          <li><a href="http://sanel-selmanovic.us/" target="_blank">portfolio</a></li>
          <li><a href="https://github.com/s-sanel/" target="_blank">github</a></li>
          <li><a href="https://www.linkedin.com/in/sanelselmanovic/" target="_blank">linkedin</a></li>
        </ul>

      </div>
      <div className="mark">@ 2017 TRAVELGRAM</div>
    </div>
  </footer>
);

export default Footer;
