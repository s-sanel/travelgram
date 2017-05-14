json.extract! post, :id, :description
json.url asset_path(post.image.url)
json.created_ago post.created_ago

json.user_id post.user.id
json.username post.user.username
json.user_profile_photo asset_path(post.user.image.url)


# json.user do
  # json.partial! 'api/users/user', user: post.user
# end

json.likes post.likes

json.comments post.comments.each do |comment|
  json.partial! 'api/comments/comment', comment: comment
end
