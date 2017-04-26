export const createFollow = (follower_id, following_id) => {
  return $.ajax({
    method: "POST",
    url: "api/follows",
    data: {follow : {follower_id, following_id}}
  });
};

export const deleteFollow = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/follows/${id}`
  });
};
