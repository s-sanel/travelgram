import * as FollowApiUtil from "../util/follows_api_util";

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

export const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
});

export const removeFollow = follow => ({
  type: REMOVE_FOLLOW,
  follow
});

export const createFollow = (follower_id, following_id) => dispatch => {
  return (
    FollowApiUtil.createFollow(follower_id, following_id)
    .then( follow => dispatch(receiveFollow(follow)))
  );
};

export const deleteFollow = (follower_id, following_id) => dispatch => {
  return (
    FollowApiUtil.deleteFollow(follower_id, following_id)
    .then( follow => dispatch(removeFollow(follow)))
  );
};
