import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import React from 'react';
import App from './app'
import AuthFormContainer from './session/auth_form_container';

import Test from './test';
import TestPosts from './test0';

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
          <IndexRoute component={ Test } onEnter={_ensureLoggedIn} />

          <Route path="/login" component={AuthFormContainer} onEnter={_redirectIfLoggedIn}/>
          <Route path="/signup" component={AuthFormContainer} onEnter={_redirectIfLoggedIn}/>


        </Route>
      </Router>
    </Provider>
  )
};

// <Route path="/posts" component={TestPosts} onEnter={_ensureLoggedIn}/>
// <Route path="/test" component={Test} onEnter={_ensureLoggedIn}/>
// <IndexRoute component={ PostsFeed } onEnter={redirectUnlessLoggedIn} />
export default Root;
