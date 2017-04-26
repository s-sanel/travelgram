json.extract! user, :id, :username, :name, :email
json.profile_photo asset_path(user.image.url)

json.followers user.followers
json.followees user.followees

# json.profile_photo asset_path(user.profile_photo)

# json.set! user.id do
#    json.extract! user, :id, :username, :name, :email
#    json.profile_photo asset_path(user.profile_photo)
# end
