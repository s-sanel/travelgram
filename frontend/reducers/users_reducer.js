import { RECEIVE_USERS, RECEIVE_USER } from '../actions/users_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follows_actions';

const UsersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users;
    case RECEIVE_USER:
      // return Object.assign({}, oldState, {[action.user.id]: action.user});
      // return {[action.user.id]: action.user};
      return action.user;

    case RECEIVE_FOLLOW:
      return oldState;
    case REMOVE_FOLLOW:
      return oldState;
    default:
      return oldState;
  }
};

export default UsersReducer;
