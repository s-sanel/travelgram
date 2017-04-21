export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

import * as APIUtil from "../util/users_api_util";

export const receiveAllUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users
  };
};

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const fetchUsers = () => dispatch => (
  APIUtil.fetchUsers()
    .then( (users) => dispatch(receiveAllUsers(users)))
);

export const fetchUser = user => dispatch => (
  APIUtil.fetchUser(user)
    .then( (user) => dispatch(receiveUser(user)))
);
