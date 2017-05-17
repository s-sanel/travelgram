json.extract! post, :id, :description
json.url asset_path(post.image.url)
json.url_large asset_path(post.image.url(:large))
json.url_medium asset_path(post.image.url(:medium))
json.created_ago post.created_ago

json.user_id post.user.id
json.username post.user.username
json.user_profile_photo asset_path(post.user.image.url)

json.likes post.likes

json.comments do
  json.array! post.comments do |comment|
    json.extract! comment, :id, :body
    json.user_id comment.user.id
    json.username comment.user.username
    json.post_id comment.post.id
  end
end
