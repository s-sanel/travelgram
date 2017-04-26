import { RECEIVE_ALL_POSTS, RECEIVE_POST, FETCH_POSTS, FETCH_POST } from '../actions/posts_actions';

export default function fetchingReducer(state = false, action) {
  switch (action.type) {
    case FETCH_POSTS:
    case FETCH_POST:
      return true;
    case RECEIVE_ALL_POSTS:
    case RECEIVE_POST:
      return false;
    default:
      return state;
  }
}
