import { RECEIVE_USERS, RECEIVE_USER } from '../actions/users_actions';

const UsersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users;
    case RECEIVE_USER:
      // return Object.assign({}, oldState, {[action.user.id]: action.user});
      // return {[action.user.id]: action.user};
      return action.user;
    default:
      return oldState;
  }
};

export default UsersReducer;
