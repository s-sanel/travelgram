json.extract! follow, :id, :follower_id, :following_id
json.followee follow.followee
json.follower follow.follower
# json.follower_id follow.follower_id

# json.extract! follow.follower, :id, :username
# json.profile_photo asset_path(follow.follower.image.url)
# json.follow_id follow.id
