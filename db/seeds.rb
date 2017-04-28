# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Post.destroy_all
Comment.destroy_all
Like.destroy_all
Follow.destroy_all


# Users
guest = User.create(username: "guest", name:"Sanel Selmanovic",
                    email: "sanel@gmail.com", password: "123456",
                    image: File.open("app/assets/images/ghost.jpg"),
                    bio: "")

pam = User.create(username: "pam360", name:"Priscilla Molina",
                    email: "pam360@gmail.com", password: "password",
                    image: File.open("app/assets/images/girl-avatar.jpg"),
                    bio: "")

lela = User.create(username: "Leana1121", name:"Leana Selmanovic",
                    email: "Leana1121@gmail.com", password: "password",
                    image: File.open("app/assets/images/girl-avatar.jpg"),
                    bio: "")

naida = User.create(username: "Naida1606", name:"Naida Sabanovic",
                    email: "Naida1606@gmail.com", password: "password",
                    image: File.open("app/assets/images/girl-avatar.jpg"),
                    bio: "")

shannon = User.create(username: "Jewel71185", name:"Shannon Farrer",
                    email: "Jewel71185@gmail.com", password: "password",
                    image: File.open("app/assets/images/girl-avatar.jpg"),
                    bio: "")

enir = User.create(username: "Enir790", name:"Enir Loncarevic",
                    email: "Enir790@gmail.com", password: "password",
                    image: File.open("app/assets/images/bearded.jpg"),
                    bio: "")

pablo = User.create(username: "PabloTour2016", name:"Kanye West",
                    email: "PabloTour2016@gmail.com", password: "password",
                    image: File.open("app/assets/images/bearded.jpg"),
                    bio: "")

scarface = User.create(username: "Scarface007", name:"Al Pacino",
                    email: "Scarface007@gmail.com", password: "password",
                    image: File.open("app/assets/images/ghost.jpg"),
                    bio: "")

rocky = User.create(username: "Rocky84", name:"Balboa Fan",
                    email: "Rocky84@gmail.com", password: "password",
                    image: File.open("app/assets/images/ghost.jpg"),
                    bio: "")

george = User.create(username: "George1776", name:"Mr. Washington",
                    email: "George1776@gmail.com", password: "password",
                    image: File.open("app/assets/images/ghost.jpg"),
                    bio: "")


# Posts

# post29 = Post.create(image: File.open("app/assets/images/cactus.jpg"), description: "Desert Cacti… prickly little guys!", user_id: rocky.id)
# post30 = Post.create(image: File.open("app/assets/images/colorado.jpg"), description: "Incredible views of the Colorado River at Horseshoe Bend", user_id: rocky.id)
# post33 = Post.create(image: File.open("app/assets/images/long-island.jpg"), description: "Long Island summer days are around the corner", user_id: george.id)
# post5 = Post.create(image: File.open("app/assets/images/malaga-cat.jpg"), description: "Malaga’s Cathedral, basking in the light", user_id: guest.id)
# post6 = Post.create(image: File.open("app/assets/images/cordoba.jpg"), description: "Breathtaking Moorish architecture in Cordoba", user_id: george.id)
# post16 = Post.create(image: File.open("app/assets/images/m-woods.jpg"), description: "Muir woods… speechless! These trees have seen it all.", user_id: shannon.id)
# post12 = Post.create(image: File.open("app/assets/images/desert-veg.jpg"), description: "Desert vegetation", user_id: lela.id)
# post13 = Post.create(image: File.open("app/assets/images/began.jpg"), description: "Where it all began… the ultimate Flashback Fridaya", user_id: george.id)

post1 = Post.create(image: File.open("app/assets/images/spy-eye.jpg"), description: "I spy the London Eye", user_id: guest.id)
post2 = Post.create(image: File.open("app/assets/images/granada.jpg"), description: "A doorway into the Old World. Granada.", user_id: naida.id)
post3 = Post.create(image: File.open("app/assets/images/darkest.jpg"), description: "It is during our darkest moments that we must focus to see the light. –Aristotle", user_id: guest.id)
post4 = Post.create(image: File.open("app/assets/images/sunset.jpg"), description: "Sunsets on the Costa del Sol...", user_id: pam.id)
post5 = Post.create(image: File.open("app/assets/images/budva.jpg"), description: "Montenegro’s seaside town of Budva", user_id: enir.id)
post6 = Post.create(image: File.open("app/assets/images/plaza-de-esp.jpg"), description: "Plaza de Espana. Que lindo!", user_id: guest.id)
post7 = Post.create(image: File.open("app/assets/images/seville.jpg"), description: "Sevilla by night", user_id: naida.id)
post8 = Post.create(image: File.open("app/assets/images/gg-park.jpg"), description: "Golden Gate park… the forest comes to the city!", user_id: rocky.id)
post9 = Post.create(image: File.open("app/assets/images/dream.jpg"), description: "I have a dream…", user_id: george.id)
post10 = Post.create(image: File.open("app/assets/images/antelope.jpg"), description: "Antelope Canyon... do you see the faces in the stone?", user_id: naida.id)
post11 = Post.create(image: File.open("app/assets/images/grand-c2.jpg"), description: "I think I dropped something…", user_id: naida.id)
post12 = Post.create(image: File.open("app/assets/images/roma.jpg"), description: "Roma… The history, the food, the sites…", user_id: guest.id)
post13 = Post.create(image: File.open("app/assets/images/grand-c.jpg"), description: "Is a comment even really necessary?", user_id: shannon.id)
post14 = Post.create(image: File.open("app/assets/images/san-fran.jpg"), description: "Nothing like San Francisco Bay breezes under the bridge on a sunny California day", user_id: george.id)
post15 = Post.create(image: File.open("app/assets/images/jamaica.jpg"), description: "Negril, Jamaica = paradise", user_id: scarface.id)

post16 = Post.create(image: File.open("app/assets/images/sedona.jpg"), description: "Sedona red rock formations through a Joshua tree", user_id: pam.id)
post17 = Post.create(image: File.open("app/assets/images/ny.jpg"), description: "Concrete jungle where dreams are made of", user_id: guest.id)


post24 = Post.create(image: File.open("app/assets/images/giralda.jpg"), description: "View of the Cathedral from inside Seville’s enchanting Giralda tower", user_id: pam.id)
post25 = Post.create(image: File.open("app/assets/images/malaga_ruins.jpg"), description: "Serenity walking Malaga’s ruins", user_id: guest.id)

post18 = Post.create(image: File.open("app/assets/images/tutin.jpg"), description: "Looks like Tuscany but…", user_id: pam.id)
post19 = Post.create(image: File.open("app/assets/images/coffee.jpg"), description: "Turksih Coffee on the Balkan roadside", user_id: guest.id)

post20 = Post.create(image: File.open("app/assets/images/bbridge.jpg"), description: "Brooklyn Bridge sunsets", user_id: lela.id)
post21 = Post.create(image: File.open("app/assets/images/spring-bloom.jpg"), description: "Spring in full bloom", user_id: shannon.id)
post22 = Post.create(image: File.open("app/assets/images/imagine.jpg"), description: "Imagine all the peopleeeeee…", user_id: guest.id)
post23 = Post.create(image: File.open("app/assets/images/al-hambra.jpg"), description: "Al-Hambra exuding feng shui balance", user_id: lela.id)
# guest.posts.create(image: File.open("app/assets/images/beach.jpg"), description: "")
# guest.likes.create()

#Comments
Comment.create(body: "Did you drink from the fountain?", user_id: pam.id, post_id: post25.id)
Comment.create(body: "Haha no, I don’t think this was drinkable!", user_id: shannon.id, post_id: post25.id)

Comment.create(body: "Incredible! Did you climb to the top of the tower?", user_id: guest.id, post_id: post24.id)
Comment.create(body: "Lucky! When we went, the tower was closed", user_id: pablo.id, post_id: post24.id)
Comment.create(body: "Yes, we went to the top. It was a bit windy up there", user_id: guest.id, post_id: post24.id)

Comment.create(body: "How zen!", user_id: pam.id, post_id: post23.id)
Comment.create(body: "Very relaxing… if only I could have kicked out all the other tourists", user_id: lela.id, post_id: post23.id)
Comment.create(body: "Looks beautiful! Enjoy your trip!", user_id: shannon.id, post_id: post23.id)

Comment.create(body: "Living life in peace, youuuuu… You may say that I’m a dreamer…", user_id: naida.id, post_id: post22.id)
Comment.create(body: "Love that song!!!!", user_id: lela.id, post_id: post22.id)
Comment.create(body: "RIP JL", user_id: pam.id, post_id: post22.id)

Comment.create(body: "Cherry blossom season has begun!", user_id: enir.id, post_id: post21.id)
Comment.create(body: "Was this in DC?", user_id: guest.id, post_id: post21.id)
Comment.create(body: "No, Astoria. We didn’t have time to make it to the D.C. Cherry Blossom Festival this year", user_id: pablo.id, post_id: post21.id)

Comment.create(body: "This view just never gets old for any New Yorker", user_id: lela.id, post_id: post20.id)
Comment.create(body: "Unlike Times Square… which is avoided like the plague", user_id: pam.id, post_id: post20.id)

# Comment.create(body: Faker::Friends.unique.quote, user_id: george.id, post_id: post19.id)


#Likes
Like.create(user_id: guest.id, post_id: post1.id)
Like.create(user_id: guest.id, post_id: post3.id)
Like.create(user_id: guest.id, post_id: post7.id)
Like.create(user_id: guest.id, post_id: post13.id)
Like.create(user_id: guest.id, post_id: post17.id)
Like.create(user_id: guest.id, post_id: post20.id)

Like.create(user_id: pam.id, post_id: post1.id)
Like.create(user_id: pam.id, post_id: post2.id)
Like.create(user_id: pam.id, post_id: post3.id)
Like.create(user_id: pam.id, post_id: post4.id)
Like.create(user_id: pam.id, post_id: post5.id)
Like.create(user_id: pam.id, post_id: post6.id)
Like.create(user_id: pam.id, post_id: post7.id)
Like.create(user_id: pam.id, post_id: post8.id)

Like.create(user_id: lela.id, post_id: post9.id)
Like.create(user_id: lela.id, post_id: post10.id)
Like.create(user_id: lela.id, post_id: post11.id)
Like.create(user_id: lela.id, post_id: post12.id)
Like.create(user_id: lela.id, post_id: post13.id)
Like.create(user_id: lela.id, post_id: post14.id)

Like.create(user_id: naida.id, post_id: post15.id)
Like.create(user_id: naida.id, post_id: post16.id)
Like.create(user_id: naida.id, post_id: post17.id)
Like.create(user_id: naida.id, post_id: post18.id)

Like.create(user_id: shannon.id, post_id: post19.id)
Like.create(user_id: shannon.id, post_id: post20.id)

Like.create(user_id: enir.id, post_id: post3.id)
Like.create(user_id: enir.id, post_id: post4.id)
Like.create(user_id: enir.id, post_id: post5.id)

Like.create(user_id: pablo.id, post_id: post11.id)
Like.create(user_id: pablo.id, post_id: post12.id)
Like.create(user_id: pablo.id, post_id: post4.id)
Like.create(user_id: pablo.id, post_id: post12.id)

Like.create(user_id: scarface.id, post_id: post8.id)
Like.create(user_id: scarface.id, post_id: post9.id)
Like.create(user_id: scarface.id, post_id: post10.id)
Like.create(user_id: scarface.id, post_id: post12.id)

Like.create(user_id: rocky.id, post_id: post11.id)
Like.create(user_id: rocky.id, post_id: post12.id)
Like.create(user_id: rocky.id, post_id: post3.id)
Like.create(user_id: rocky.id, post_id: post1.id)
Like.create(user_id: rocky.id, post_id: post2.id)
Like.create(user_id: rocky.id, post_id: post3.id)
Like.create(user_id: rocky.id, post_id: post4.id)

Like.create(user_id: george.id, post_id: post1.id)
Like.create(user_id: george.id, post_id: post11.id)
Like.create(user_id: george.id, post_id: post5.id)

#Follows
Follow.create(follower_id: guest.id, following_id: pam.id)
Follow.create(follower_id: guest.id, following_id: lela.id)
Follow.create(follower_id: guest.id, following_id: naida.id)
Follow.create(follower_id: guest.id, following_id: shannon.id)

Follow.create(follower_id: pam.id, following_id: guest.id)
Follow.create(follower_id: pam.id, following_id: george.id)
Follow.create(follower_id: pam.id, following_id: shannon.id)
Follow.create(follower_id: pam.id, following_id: scarface.id)
Follow.create(follower_id: pam.id, following_id: lela.id)

Follow.create(follower_id: lela.id, following_id: guest.id)
Follow.create(follower_id: lela.id, following_id: shannon.id)
Follow.create(follower_id: lela.id, following_id: scarface.id)

Follow.create(follower_id: george.id, following_id: guest.id)
Follow.create(follower_id: george.id, following_id: pam.id)


# began = Post.create(image: File.open("app/assets/images/beach.jpg"), description: "Where it all began… the ultimate Flashback Fridaya", user_id: guest.id)
# long_island = Post.create(image: File.open("app/assets/images/beach.jpg"), description: "Long Island summer days are around the corner", user_id: guest.id)
# sedona = Post.create(image: File.open("app/assets/images/beach.jpg"), description: "Sedona red rock formations through a Joshua tree", user_id: guest.id)
# cacti = Post.create(image: File.open("app/assets/images/beach.jpg"), description: "Desert Cacti… prickly little guys!", user_id: guest.id)
# colorado = Post.create(image: File.open("app/assets/images/beach.jpg"), description: "Incredible views of the Colorado River at Horseshoe Bend", user_id: guest.id)
# jungle = Post.create(image: File.open("app/assets/images/beach.jpg"), description: "Concrete jungle where dreams are made of", user_id: guest.id)
# montenegro = Post.create(image: File.open("app/assets/images/beach.jpg"), description: "Montenegro’s seaside town of Budva", user_id: guest.id)
# coffee = Post.create(image: File.open("app/assets/images/beach.jpg"), description: "Turksih Coffee on the Balkan roadside", user_id: guest.id)
# roma = Post.create(image: File.open("app/assets/images/beach.jpg"), description: "Roma… The history, the food, the sites…", user_id: guest.id)
# dream = Post.create(image: File.open("app/assets/images/beach.jpg"), description: "I have a dream…", user_id: guest.id)
#
# london_eye = Post.create(image: File.open("app/assets/images/beach.jpg"), description: "I spy the London Eye", user_id: guest.id)
# granada = Post.create(image: File.open("app/assets/images/calma.jpg"), description: "A doorway into the Old World. Granada.", user_id: naida.id)
# aristotel = Post.create(image: File.open("app/assets/images/beach.jpg"), description: "It is during our darkest moments that we must focus to see the light. –Aristotle", user_id: guest.id)
# costa_del_sol = Post.create(image: File.open("app/assets/images/calma.jpg"), description: "Sunsets on the Costa del Sol...", user_id: pam.id)
# malaga_cat = Post.create(image: File.open("app/assets/images/beach.jpg"), description: "Malaga’s Cathedral, basking in the light", user_id: guest.id)
# moorish = Post.create(image: File.open("app/assets/images/calma.jpg"), description: "Breathtaking Moorish architecture in Cordoba", user_id: george.id)
# plaza_de_espana = Post.create(image: File.open("app/assets/images/beach.jpg"), description: "Plaza de Espana. Que lindo!", user_id: guest.id)
# sevilla = Post.create(image: File.open("app/assets/images/calma.jpg"), description: "Sevilla by night", user_id: guest.id)
# tutin = Post.create(image: File.open("app/assets/images/beach.jpg"), description: "Looks like Tuscany but…", user_id: pam.id)
# antelope = Post.create(image: File.open("app/assets/images/calma.jpg"), description: "Antelope Canyon... do you see the faces in the stone?", user_id: naida.id)
# dropped = Post.create(image: File.open("app/assets/images/beach.jpg"), description: "I think I dropped something…", user_id: naida.id)
# desert = Post.create(image: File.open("app/assets/images/calma.jpg"), description: "Desert vegetation", user_id: lela.id)
# wow = Post.create(image: File.open("app/assets/images/beach.jpg"), description: "Is a comment even really necessary? ", user_id: lela.id)
# muir_woods = Post.create(image: File.open("app/assets/images/calma.jpg"), description: "Muir woods… speechless! These trees have seen it all.", user_id: shannon.id)
# san_fran = Post.create(image: File.open("app/assets/images/beach.jpg"), description: "Nothing like San Francisco Bay breezes under the bridge on a sunny California day", user_id: george.id)
# golden_gate = Post.create(image: File.open("app/assets/images/calma.jpg"), description: "Golden Gate park… the forest comes to the city!", user_id: rocky.id)
# jamaica = Post.create(image: File.open("app/assets/images/beach.jpg"), description: "Negril, Jamaica = paradise", user_id: scarface.id)
# b_bridge = Post.create(image: File.open("app/assets/images/calma.jpg"), description: "Brooklyn Bridge sunsets", user_id: pablo.id)
# spring_bloom = Post.create(image: File.open("app/assets/images/beach.jpg"), description: "Spring in full bloom", user_id: shannon.id)
# imagine = Post.create(image: File.open("app/assets/images/calma.jpg"), description: "Imagine all the peopleeeeee…", user_id: guest.id)
# al_hambra = Post.create(image: File.open("app/assets/images/beach.jpg"), description: "Al-Hambra exuding feng shui balance", user_id: lela.id)
# giralda = Post.create(image: File.open("app/assets/images/calma.jpg"), description: "View of the Cathedral from inside Seville’s enchanting Giralda tower", user_id: pam.id)
# malaga_ruins = Post.create(image: File.open("app/assets/images/beach.jpg"), description: "Serenity walking Malaga’s ruins", user_id: guest.id)
