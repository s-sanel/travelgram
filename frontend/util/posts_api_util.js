export const fetchPosts = () => {
  return $.ajax({
    method: "GET",
    url: "/api/posts"
  });
};

export const fetchPost = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/posts/${id}`
  });
};

export const createPost = (post) => {
  // debugger
  return $.ajax({
    method: "POST",
    url: "/api/posts",
    dataType: 'json',
    contentType: false,
    processData: false,
    data: post
  });
};

export const updatePost = (post) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/posts/${post.id}`,
    data: {post}
  });
};

export const deletePost = (id) => {
  // debugger
  return $.ajax({
    method: "DELETE",
    url: `/api/posts/${id}`
  });
};
