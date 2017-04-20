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

### Photos

- `GET /api/photos`
- `POST /api/photos`
- `GET /api/photos/:id`
- `PATCH /api/photos/:id`
- `DELETE /api/photos/:id`

### Likes

- `POST /api/likes`
- `DELETE /api/likes/:id`

### Comments

- `POST /api/comments`
- `DELETE /api/comments/:id`

### Follows

- `POST /api/users/:userId/follows`
- `DELETE /api/users/:userId/follows/:id`
