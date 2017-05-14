json.extract! follow, :id, :follower_id, :following_id

json.followee follow.followee
json.follower follow.follower
#?

# json.follower_id follow.follower.id
# json.follower_username follow.follower.username
# json.follower_photo asset_path(follow.follower.image.url)
#
# json.followee_id follow.followee.id
# json.followee_username follow.followee.username
# json.followee_photo asset_path(follow.followee.image.url)

# json.extract! follow.follower, :id, :username
# json.profile_photo asset_path(follow.follower.image.url)
# json.follow_id follow.id
