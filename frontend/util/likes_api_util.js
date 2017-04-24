export const createLike = (postId) => {
  return $.ajax({
    method: "POST",
    url: "/api/likes/",
    // data: postId
    data: {like: { post_id: postId }}
  });
};

export const deleteLike = (post_id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/likes/${post_id}`,
    data: {like: { post_id }}
  });
};
