export const createFollow = (follower_id, following_id) => {
  return $.ajax({
    method: "POST",
    url: "api/follows",
    data: {follow : {follower_id, following_id}}
  });
};

export const deleteFollow = (follower_id, following_id) => {
  return $.ajax({
    method: "GET",
    url: "api/follows/delete",
    data: {follow : {follower_id, following_id}}
  });
};
