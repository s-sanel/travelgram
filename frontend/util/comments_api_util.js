export const createComment = (post_id, body) => {
  return $.ajax({
    method: "POST",
    url: "api/comments",
    data: {comment : {post_id, body}}
  });
};

export const deleteComment = (post_id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/likes/${post_id}`,
    data: {like: {post_id}}
  });
};
