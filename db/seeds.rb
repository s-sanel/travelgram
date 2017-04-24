# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Post.destroy_all
# test_user = User.find_by_username("sanel")
# test_user2 = User.find_by_username("guest")
# test_user.destroy() if test_user
# test_user2.destroy() if test_user2

test_user = User.new(username: "sanel", name:"selmanovic", email: "sanel@gmail.com", password: "123456")
test_user.save

guest = User.new(username: "guest", name:"nameless", email: "guest@gmail.com", password: "123456", image: File.open("app/assets/images/girl-avatar.jpg"))
guest.save

test_user.posts.create(image: File.open("app/assets/images/beach.jpg"), description: "beautiful beach")
guest.posts.create(image: File.open("app/assets/images/calma.jpg"), description: "just do it!")
guest.posts.create(image: File.open("app/assets/images/beach.jpg"), description: "some description")
test_user.posts.create(image: File.open("app/assets/images/calma.jpg"), description: "another description")
test_user.posts.create(image: File.open("app/assets/images/beach.jpg"), description: "tell me something")
guest.posts.create(image: File.open("app/assets/images/test.jpeg"), description: "great trip!")
test_user.posts.create(image: File.open("app/assets/images/beach.jpg"), description: "niceeeeeee!")
guest.posts.create(image: File.open("app/assets/images/test.jpeg"), description: "ou yeah")
guest.posts.create(image: File.open("app/assets/images/beach.jpg"), description: "i want to go thereee")
