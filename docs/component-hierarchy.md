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
 + NewPhoto



## Routes

|Path   | Component   |
|-------|-------------|
| "/"    | "App" |
| "/login" | "AuthFormContainer" |
| "/signup" | "AuthFormContainer" |
| "/"    | "PhotosIndexContainer" |
| "/posts/:postId" | "PostShowContainer" |
| "/users/:userId" | "UserProfileContainer" |
| "/upload-photo" | "PostPhotoContainer" |
