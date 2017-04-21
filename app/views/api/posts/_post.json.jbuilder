json.extract! post, :id, :description
json.url asset_path(post.url)
json.user do
  json.extract! post.user, :id, :username
end


# json.extract! post, :id, :url, :description
# json.user do
#   json.extract! post.user, :id, :username
# end
