json.array! @results do |user|
  json.id user.id
  json.name user.name
  json.username user.username
  json.profile_photo asset_path(user.image.url)
end
