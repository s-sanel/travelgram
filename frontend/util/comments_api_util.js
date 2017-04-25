export const createComment = (post_id, body) => {
  return $.ajax({
    method: "POST",
    url: "api/comments",
    data: {comment : {post_id, body}}
  });
};

export const deleteComment = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/comments/${id}`
    // data: {like: {post_id}}
  });
};
