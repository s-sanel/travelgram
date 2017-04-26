import * as PostApiUtil from "../util/posts_api_util";

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POST = "FETCH_POST";
export const CREATE_POST = "CREATE_POST";

export const receiveAllPosts = posts => ({
  type: RECEIVE_ALL_POSTS,
  posts
});

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

export const removePost = post => ({
  type: REMOVE_POST,
  post
});


export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_POSTS });
    return PostApiUtil.fetchPosts().then(posts => dispatch(receiveAllPosts(posts)));
  };
};

// export const fetchPostsssssss = () => dispatch => (
//   PostApiUtil.fetchPosts().then(posts => dispatch(receiveAllPosts(posts)))
// );

export const fetchPost = id => dispatch => (
  PostApiUtil.fetchPost(id).then(post => dispatch(receivePost(post)))
);

export const createPost = post => dispatch => (
  PostApiUtil.createPost(post).then(post => dispatch(receivePost(post)))
);

export const updatePost = post => dispatch => (
  PostApiUtil.updatePost(post).then(post => dispatch(receivePost(post)))
  //     .then(hashHistory.push('/')) and import hashHistory
);

export const deletePost = post => dispatch => (
  PostApiUtil.deletePost(post).then(post => dispatch(removePost(post)))
);
