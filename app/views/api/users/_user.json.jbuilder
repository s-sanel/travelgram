json.extract! user, :id, :username, :name, :email
json.profile_photo asset_path(user.image.url)

# json.profile_photo asset_path(user.profile_photo)

# json.set! user.id do
#    json.extract! user, :id, :username, :name, :email
#    json.profile_photo asset_path(user.profile_photo)
# end
