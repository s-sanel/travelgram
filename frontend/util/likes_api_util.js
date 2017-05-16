export const createLike = (post_id) => {
  return $.ajax({
    method: "POST",
    url: "/api/likes/",
    data: {like: { post_id: post_id }}
  });
};

export const deleteLike = (post_id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/likes/${post_id}`,
    data: {like: { post_id }}
  });
};
