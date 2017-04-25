import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST } from '../actions/posts_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/likes_actions';
import { merge } from 'lodash/merge';
import { getIndex } from '../util/util';


const PostsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return action.posts;
      // let posts = action.posts;
      // return Object.assign({}, oldState, {posts});
    case RECEIVE_POST:
      return Object.assign({}, oldState, { [action.post.id]: action.post });
    case REMOVE_POST:
      let newState = Object.assign({}, oldState);
      delete newState[action.post.id];
      return newState;
    case RECEIVE_LIKE:
      let copyState = Object.assign({}, oldState);
      copyState[action.like.post_id].likes.push(action.like);
      return copyState;
    case REMOVE_LIKE:
      let nextState = Object.assign({}, oldState);
      let likeIndex = getIndex(nextState[action.like.post_id].likes, action.like);
      nextState[action.like.post_id].likes.splice(likeIndex, 1);
      return nextState;
    default:
      return oldState;
  }
};


export default PostsReducer;
