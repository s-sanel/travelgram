import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST } from '../actions/posts_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/likes_actions';
import { merge } from 'lodash/merge';


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
// debugger
      let copyState = Object.assign({}, oldState);
      copyState[action.like.postId].likes.push(action.like);
      // update likes array for liked post
      // action.like = {
        //   id: 5,
        //   userId: 39,
        //   postId: 673764
        //
        // oldState.posts[action.like.postId].likes.push(action.like)
        return copyState;
    default:
      return oldState;
  }
};


export default PostsReducer;
