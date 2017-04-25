import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import * as APIUtils from './util/users_api_util';
import { login, signup, logout } from './actions/session_actions';
import { fetchUsers, fetchUser } from './actions/users_actions';
import { createLike, deleteLike } from './actions/likes_actions';
import {fetchPost, fetchPosts} from './actions/posts_actions';
import {selectAllUsers, selectUserPosts} from './reducers/selectors';

import {createComment, deleteComment} from './actions/comments_actions';


document.addEventListener('DOMContentLoaded', () => {

//just for testing!
  // window.testUser = { user: { username: "test", email: "test@gmail.com", password: "123456" } };
  // window.login = login;
  // window.signup = signup;
  // window.logout = logout;
  // window.store = configureStore();
  //
  // window.fetchPosts = fetchPosts;
  // window.fetchPost = fetchPost;
  // window.createPost = createPost;
  // window.updatePost = updatePost;
  // window.fetchUser = fetchUser;
  // window.selectAllUsers = selectAllUsers;
  // window.selectUserPosts = selectUserPosts;
  // window.createComment = createComment;
  // window.deleteComment = deleteComment;

//just for testing!


  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  // window.store = store;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
