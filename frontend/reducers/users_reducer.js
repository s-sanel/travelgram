import { RECEIVE_USERS, RECEIVE_USER } from '../actions/users_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follows_actions';
import { getIndexById } from '../util/util';

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
      let copyAddFollow = Object.assign({}, oldState);
      copyAddFollow.followers.push(action.follow.follower);
      return copyAddFollow;
    case REMOVE_FOLLOW:
      let copyRemFollow = Object.assign({}, oldState);
      let followeeIndex = getIndexById(copyRemFollow.followers, action.follow.follower_id);
      copyRemFollow.followers.splice(followeeIndex, 1);
      return copyRemFollow;
    default:
      return oldState;
  }
};

export default UsersReducer;
