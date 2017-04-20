# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

test_user = User.find_by_username("sanel")
test_user.destroy() if test_user

test_user = User.new(username: "sanel", email: "sanel@gmail.com", password: "123456")
test_user.save

test_user.posts.create(url: "/assets/url/1", description: "post 1")
test_user.posts.create(url: "/assets/url/2", description: "post 2")
test_user.posts.create(url: "/assets/url/3", description: "post 3")
test_user.posts.create(url: "/assets/url/4", description: "post 4")
test_user.posts.create(url: "/assets/url/5", description: "post 5 ")
