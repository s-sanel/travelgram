import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import * as APIUtils from './util/session_api_util';
import { login, signup, logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {

//just for testing!
  // window.testUser = { user: { username: "test", email: "test@gmail.com", password: "123456" } };
  // window.login = login;
  // window.signup = signup;
  // window.logout = logout;
  // window.store = configureStore();
  // let store = configureStore();
//just for testing!


  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
