# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users/:id`
- `GET /api/users`
- `GET /api/users/:id`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Posts

- `GET /api/posts`
- `POST /api/posts`
- `GET /api/posts/:id`
- `PATCH /api/posts/:id`
- `DELETE /api/posts/:id`

### Likes

- `POST /api/likes`
- `DELETE /api/likes/:id`

### Comments

- `POST /api/comments`
- `DELETE /api/comments/:id`

### Follows

- `POST /api/users/:userId/follows`
- `DELETE /api/users/:userId/follows/:id`
