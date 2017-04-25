json.extract! post, :id, :description
json.url asset_path(post.image.url)
json.created_ago post.created_ago
json.user do
  json.partial! 'api/users/user', user: post.user
end

json.likes post.likes

# comments
# json.comments post.comments

json.comments post.comments.each do |comment|
  # json.set! comment.id do
    json.extract! comment, :id, :body
    json.user_id comment.user.id
    json.username comment.user.username
    json.post_id comment.post.id
  # end
end
