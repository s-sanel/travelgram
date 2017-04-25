import * as LikeApiUtil from "../util/likes_api_util";

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

export const removeLike = like => ({
  type: REMOVE_LIKE,
  like
});

export const createLike = postId => dispatch => {
  return (
    LikeApiUtil.createLike(postId)
    .then( like => dispatch(receiveLike(like)))
  );
};

export const deleteLike = postId => dispatch => {
  return (
    LikeApiUtil.deleteLike(postId)
    .then( like => dispatch(removeLike(like)))
  );
};
