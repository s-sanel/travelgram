```js
{
  currentUser: {
    id: 1,
    username: "travel-academy",
    name: "Travelgram Academy"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    uploadPhoto: {errors: ["url can't be blank"]}
  },
  user: {
    id: 1,
    username: "travel-academy",
    name: "Travelgram Academy"
  },
  photos: {
    1: {
      description: "is useful to plan",
      url: "http//:www.url.com/image.jpg",
      user: {
        id: 1,
        username: "travel-academy",
        name: "Travelgram Academy"
      }
      comments: {
        1: {
          body: "The best beach on the world!"
          user_id: 1,
          photo_id: 1
        },
        2: {
          body: "Indeed!"
          user_id: 2,
          photo_id: 1
        }
      }
      likes: {
        1: {
          user_id: 1,
          photo_id: 1
        }
      }
    }

  }

}
```
