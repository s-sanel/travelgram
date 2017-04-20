json.extract! post, :id, :url, :description
json.user do
  json.extract! post.user, :id, :username
end
