import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST } from '../actions/posts_actions';
import { merge } from 'lodash/merge';


const PostsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);


  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      let posts = action.posts;
      return Object.assign({}, oldState, {posts});
    case RECEIVE_POST:
    
      return Object.assign({}, oldState, { [action.post.id]: action.post });
    case REMOVE_POST:
      let newState = Object.assign({}, oldState);
      delete newState[action.post.id];
      return newState;
    default:
      return oldState;
  }
};


export default PostsReducer;
