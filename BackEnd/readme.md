# Article Management System API Documentation

## Base URL
`http://localhost:3000/api/articles`

## Endpoints

### 1. Create New Article
**POST** `/`

**Headers:**
```http
Content-Type: application/json
```

**Request Body:**
```json
{
  "title": "Pendidikan Karakter di Sekolah",
  "header": "Pentingnya Pendidikan Karakter",
  "author": "John Doe",
  "body": "Isi artikel tentang pendidikan karakter...",
  "photo": "https://example.com/photo.jpg"
}
```

**Response (201 Created):**
```json
{
  "id": 1,
  "title": "Pendidikan Karakter di Sekolah",
  "header": "Pentingnya Pendidikan Karakter",
  "date": "2023-10-05T08:15:30.123Z",
  "author": "John Doe",
  "body": "Isi artikel tentang pendidikan karakter...",
  "photo": "https://example.com/photo.jpg"
}
```

### 2. Get All Articles
**GET** `/`

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "title": "Pendidikan Karakter...",
    "header": "Pentingnya Pendidikan...",
    "date": "2023-10-05T08:15:30.123Z",
    "author": "John Doe",
    "body": "Isi artikel...",
    "photo": "https://example.com/photo.jpg"
  }
]
```

### 3. Get Single Article
**GET** `/{id}`

**Response (200 OK):**
```json
{
  "id": 1,
  "title": "Pendidikan Karakter...",
  "header": "Pentingnya Pendidikan...",
  "date": "2023-10-05T08:15:30.123Z",
  "author": "John Doe",
  "body": "Isi artikel...",
  "photo": "https://example.com/photo.jpg"
}
```

### 4. Update Article
**PUT** `/{id}`

**Request Body:**
```json
{
  "title": "Updated Title",
  "header": "Updated Header",
  "author": "Jane Doe",
  "body": "Updated content...",
  "photo": "https://example.com/new-photo.jpg"
}
```

**Response (200 OK):**
```json
{
  "id": 1,
  "title": "Updated Title",
  "header": "Updated Header",
  "date": "2023-10-05T08:15:30.123Z",
  "author": "Jane Doe",
  "body": "Updated content...",
  "photo": "https://example.com/new-photo.jpg"
}
```

### 5. Delete Article
**DELETE** `/{id}`

**Response (204 No Content)**

## Error Handling

**Common Error Response:**
```json
{
  "status": "error",
  "message": "Error message"
}
```

**Status Codes:**
- `400 Bad Request`: Validation error
- `404 Not Found`: Article tidak ditemukan
- `500 Internal Server Error`: Kesalahan server

## Setup and Usage

### Prerequisites
- Node.js v18+
- PostgreSQL v15+
- Postman/curl/Thunder Client

### Installation
```bash
# Install dependencies
npm install

# Setup environment variables (copy .env.example)
cp .env.example .env

# Edit .env file sesuai konfigurasi database Anda
nano .env
```

### Database Migration
```bash
# Create database
createdb web-pesantren

# Run migration
psql -U postgres -d web-pesantren -a -f create-articles-table.sql
```

### Running the Server
```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

## Testing Examples

### Create Article (curl)
```bash
curl -X POST http://localhost:3000/api/articles \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Belajar Coding",
    "header": "Dasar-dasar Pemrograman",
    "author": "Sarah Smith",
    "body": "Materi pembelajaran coding...",
    "photo": "https://example.com/coding.jpg"
  }'
```

### Get All Articles
```bash
curl http://localhost:3000/api/articles
```

### Update Article
```bash
curl -X PUT http://localhost:3000/api/articles/1 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Title",
    "header": "Updated Header",
    "author": "Updated Author",
    "body": "Updated content...",
    "photo": "https://example.com/updated.jpg"
  }'
```

## Validation Rules

| Field   | Rules                          |
|---------|--------------------------------|
| title   | Required, string (max 255)     |
| header  | Required, string (max 255)     |
| date    | Optional, ISO8601 date format  |
| author  | Required, string (max 255)     |
| body    | Required, string               |
| photo   | Optional, valid URL format     |