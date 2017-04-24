## Component Hierarchy

**App**
 + LoginForm
 + SignupForm
 + PhotosIndexContainer


**PhotosIndexContainer**
  - PhotoListItem
    + Likes
    + CommentsContainer
      + CommentItem
    + CommentForm


**UserProfileContainer**
  + UserInfo
    - EditUser
  + UserPostIndex
    - UserPostItem

**PostShowContainer**
  - PhotoListItem
    + Likes
    + CommentsContainer
      - CommentItem
    + CommentForm

**PostPhotoContainer**
 + NewPost



## Routes

|Path   | Component   |
|-------|-------------|
| "/"    | "App" |
| "/"    | "PhotosIndexContainer" |
| "/login" | "AuthFormContainer" |
| "/signup" | "AuthFormContainer" |
| "/posts/:postId" | "PostShowContainer" |
| "/users/:userId" | "UserProfileContainer" |
| "/create-post" | "PostPhotoContainer" |
