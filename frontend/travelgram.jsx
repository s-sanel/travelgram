import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';

import * as APIUtils from './util/users_api_util';
import { login, signup, logout } from './actions/session_actions';
import { fetchUsers, fetchUser } from './actions/users_actions';
import { createLike, deleteLike } from './actions/likes_actions';
import {fetchPost, fetchPosts} from './actions/posts_actions';
import {selectAllUsers, selectUserPosts} from './reducers/selectors';

import {createFollow, deleteFollow} from './actions/follows_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  Modal.setAppElement(document.body);
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
