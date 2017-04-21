import { values } from 'lodash';

export const selectUserPosts = (state, userId) => {
	const foundPosts = state.posts.find(post => post.user.id == userId);
	return foundPosts || {};
};

export const selectAllUsers = (state) => values(state.users);
