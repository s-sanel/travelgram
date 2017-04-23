# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


test_user = User.find_by_username("sanel")
test_user2 = User.find_by_username("guest")
test_user.destroy() if test_user
test_user2.destroy() if test_user2

test_user = User.new(username: "sanel", name:"selmanovic", email: "sanel@gmail.com", password: "123456", profile_photo: "ghost.jpeg")
test_user.save

test_user2 = User.new(username: "guest", name:"nameless", email: "guest@gmail.com", password: "123456")
test_user2.save

test_user.posts.create(url: "beach.jpeg", description: "post 1")
test_user.posts.create(url: "test.jpeg", description: "post 2")
test_user.posts.create(url: "calma.jpeg", description: "post 3")
test_user.posts.create(url: "beach.jpeg", description: "post 1")
test_user.posts.create(url: "test.jpeg", description: "post 4")
test_user.posts.create(url: "calma.jpeg", description: "post 5")
test_user.posts.create(url: "beach.jpeg", description: "post 1")
test_user2.posts.create(url: "test.jpeg", description: "post 4")
test_user2.posts.create(url: "beach.jpeg", description: "post 5")
