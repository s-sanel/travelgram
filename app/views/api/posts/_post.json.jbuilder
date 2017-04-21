json.extract! post, :id, :url, :description
json.user do
  json.extract! post.user, :id, :username
end

# json.extract! post do
#   json.id post.id
#   json.url url_for(post.url)
#   json.description post.description
#   json.post.user do
#     json.extract! post.user, :id, :username
#   end
#
# end
