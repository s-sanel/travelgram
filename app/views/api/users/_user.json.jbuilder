json.extract! user, :id, :username, :name, :email, :bio, :website
json.profile_photo asset_path(user.image.url)

# json.followers user.followers
# json.followees user.followees


json.followers user.follows_as_followee.each do |follow|
  json.extract! follow.follower, :id, :username
  json.profile_photo asset_path(follow.follower.image.url)
  json.follow_id follow.id
end

json.followees user.follows_as_follower.each do |follow|
  json.extract! follow.followee, :id, :username
  json.profile_photo asset_path(follow.followee.image.url)
  json.follow_id follow.id
end
