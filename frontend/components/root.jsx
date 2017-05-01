import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import React from 'react';
import App from './app'
import AuthFormContainer from './session/auth_form_container';
import UserProfileContainer from './user_profile/user_profile_container';
import EditProfileContainer from './user_profile/edit_profile_container';
import UploadPostContainer from './posts/upload_post_container';

import Posts from './posts/posts';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/signup');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  }

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App } >
          <IndexRoute component={ Posts } onEnter={_ensureLoggedIn} />
          <Route path="/login" component={AuthFormContainer} onEnter={_redirectIfLoggedIn}/>
          <Route path="/signup" component={AuthFormContainer} onEnter={_redirectIfLoggedIn}/>
          <Route path="users/:user_id" component={UserProfileContainer} onEnter={_ensureLoggedIn} />
          <Route path="users/:user_id/edit" component={EditProfileContainer} onEnter={_ensureLoggedIn} />
          <Route path="/upload-post" component={UploadPostContainer} onEnter={_ensureLoggedIn} />

        </Route>
      </Router>
    </Provider>
  )
};

export default Root;
