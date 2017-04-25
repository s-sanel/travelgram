import * as CommentApiUtil from "../util/comments_api_util";

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});

export const createComment = (postId, body) => dispatch => {
  return (
    CommentApiUtil.createComment(postId, body)
    .then( comment => dispatch(receiveComment(comment)))
  );
};

export const deleteComment = id => dispatch => {
  return (
    CommentApiUtil.deleteComment(id)
    .then( comment => dispatch(removeComment(comment)))
  );
};
