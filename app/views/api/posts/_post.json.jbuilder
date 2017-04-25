json.extract! post, :id, :description
json.url asset_path(post.image.url)
json.created_ago post.created_ago
json.user do
  json.partial! 'api/users/user', user: post.user
end

json.likes post.likes

# comments
json.comments post.comments
