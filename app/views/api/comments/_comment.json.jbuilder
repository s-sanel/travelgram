json.extract! comment, :id, :body
json.user_id comment.user.id
json.username comment.user.username
json.post_id comment.post.id
