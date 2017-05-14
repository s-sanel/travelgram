import { values } from 'lodash';

export const selectUserPosts = (state, userId) => {
  let arrayPosts = Object.values(state.posts);
// debugger
  const foundPosts = arrayPosts.filter(post => {
    // return post.user.id == userId;
    return post.user_id == userId;
  } );
	return foundPosts || {};
};

export const selectAllUsers = (state) => values(state.users);
