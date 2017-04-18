import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import * as APIUtils from './util/session_api_util';

import { login, signup, logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {


//just for testing!
  window.testUser = { user: { username: "test", email: "test@gmail.com", password: "123456" } };
  window.login = APIUtils.login;
  window.signup = APIUtils.signup;
  window.logout = APIUtils.logout;

  window.store = configureStore();
//just for testing!

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to travelgram</h1>, root);
});
