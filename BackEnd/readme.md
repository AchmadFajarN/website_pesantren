# Website Pesantren API Documentation

## Base URLs
- Articles: `http://localhost:8080/api/articles`
- Students: `http://localhost:8080/api/students`

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

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Number of items per page (default: 10, max: 50)

**Response (200 OK):**
```json
{
  "data": [
    {
      "id": 1,
      "title": "Pendidikan Karakter...",
      "header": "Pentingnya Pendidikan...",
      "date": "2023-10-05T08:15:30.123Z",
      "author": "John Doe",
      "body": "Isi artikel...",
      "photo": "https://example.com/photo.jpg"
    }
  ],
  "pagination": {
    "current_page": 1,
    "per_page": 10,
    "total": 25,
    "total_pages": 3
  }
}
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
  "error": "Error message",
  "details": "Detailed error description"
}
```

**Status Codes:**

For Articles:
- `400 Bad Request`: Invalid request payload
- `404 Not Found`: Article tidak ditemukan
- `500 Internal Server Error`: Kesalahan server

For Students:
- `400 Bad Request`: Invalid request payload or validation error
  - Invalid NIK format (harus 16 digit)
  - Invalid email format
  - Invalid jenis_kelamin (harus "L" atau "P")
  - Invalid tanggal_lahir format (YYYY-MM-DD)
  - Invalid tahun_lulus (harus antara 2000-2025)
- `404 Not Found`: Siswa tidak ditemukan
- `409 Conflict`: Email atau NIK sudah terdaftar
- `500 Internal Server Error`: Kesalahan server

## Auto-generated Fields

### For Students:
- `id_pendaftaran`: UUID v4 auto-generated
- `nomor_pendaftaran`: Format "YNH-{tahun}-{sequence}"
  - Example: "YNH-2025-0001"
- `tanggal_daftar`: Current timestamp when record is created

### For Articles:
- `id`: Auto-incrementing integer
- `date`: Current timestamp when article is created

## Student API Endpoints

### 1. Create New Student
**POST** `/api/students`

**Headers:**
```http
Content-Type: application/json
```

**Request Body:**
```json
{
  "nama_lengkap": "Ahmad Budiman",
  "nik": "1234567890123546",
  "tempat_lahir": "Jakarta",
  "tanggal_lahir": "2005-05-15",
  "jenis_kelamin": "L",
  "alamat": "Jl. Merdeka No. 123",
  "provinsi": "DKI Jakarta",
  "kota_kabupaten": "Jakarta Selatan",
  "kode_pos": "12345",
  "no_hp": "081234567890",
  "email": "ahmad3@example.com",
  "asal_sekolah": "SMP Negeri 1 Jakarta",
  "tahun_lulus": 2023
}
```

**Response (201 Created):**
```json
{
  "id_pendaftaran": "123e4567-e89b-12d3-a456-426614174000",
  "nomor_pendaftaran": "YNH-2025-0001",
  "nama_lengkap": "Ahmad Budiman",
  "nik": "1234567890123546",
  "tempat_lahir": "Jakarta",
  "tanggal_lahir": "2005-05-15",
  "jenis_kelamin": "L",
  "alamat": "Jl. Merdeka No. 123",
  "provinsi": "DKI Jakarta",
  "kota_kabupaten": "Jakarta Selatan",
  "kode_pos": "12345",
  "no_hp": "081234567890",
  "email": "ahmad3@example.com",
  "asal_sekolah": "SMP Negeri 1 Jakarta",
  "tahun_lulus": 2023,
  "tanggal_daftar": "2025-05-13T10:30:00Z"
}
```

### 2. Get All Students
**GET** `/api/students`

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Number of items per page (default: 10, max: 50)

**Response (200 OK):**
```json
{
  "data": [
    {
      "id_pendaftaran": "123e4567-e89b-12d3-a456-426614174000",
      "nomor_pendaftaran": "YNH-2025-0001",
      "nama_lengkap": "Ahmad Budiman",
      "nik": "1234567890123546",
      "tempat_lahir": "Jakarta",
      "tanggal_lahir": "2005-05-15",
      "jenis_kelamin": "L",
      "alamat": "Jl. Merdeka No. 123",
      "provinsi": "DKI Jakarta",
      "kota_kabupaten": "Jakarta Selatan",
      "kode_pos": "12345",
      "no_hp": "081234567890",
      "email": "ahmad3@example.com",
      "asal_sekolah": "SMP Negeri 1 Jakarta",
      "tahun_lulus": 2023,
      "tanggal_daftar": "2025-05-13T10:30:00Z"
    }
  ],
  "pagination": {
    "current_page": 1,
    "per_page": 10,
    "total": 25,
    "total_pages": 3
  }
}
```

### 3. Get Student by Registration Number
**GET** `/api/students/{nomor}`

**Response (200 OK):**
```json
{
  "id_pendaftaran": "123e4567-e89b-12d3-a456-426614174000",
  "nomor_pendaftaran": "YNH-2025-0001",
  "nama_lengkap": "Ahmad Budiman",
  "nik": "1234567890123546",
  "tempat_lahir": "Jakarta",
  "tanggal_lahir": "2005-05-15",
  "jenis_kelamin": "L",
  "alamat": "Jl. Merdeka No. 123",
  "provinsi": "DKI Jakarta",
  "kota_kabupaten": "Jakarta Selatan",
  "kode_pos": "12345",
  "no_hp": "081234567890",
  "email": "ahmad3@example.com",
  "asal_sekolah": "SMP Negeri 1 Jakarta",
  "tahun_lulus": 2023,
  "tanggal_daftar": "2025-05-13T10:30:00Z"
}
```

### 4. Update Student
**PUT** `/api/students/{nomor}`

**Request Body:**
```json
{
  "nama_lengkap": "Ahmad Budiman",
  "tempat_lahir": "Jakarta",
  "tanggal_lahir": "2005-05-15",
  "jenis_kelamin": "L",
  "alamat": "Jl. Merdeka No. 456",
  "provinsi": "DKI Jakarta",
  "kota_kabupaten": "Jakarta Selatan",
  "kode_pos": "12345",
  "no_hp": "081234567890",
  "email": "ahmad.updated@example.com",
  "asal_sekolah": "SMP Negeri 1 Jakarta",
  "tahun_lulus": 2023
}
```

**Response (200 OK):**
```json
{
  "id_pendaftaran": "123e4567-e89b-12d3-a456-426614174000",
  "nomor_pendaftaran": "YNH-2025-0001",
  "nama_lengkap": "Ahmad Budiman",
  "nik": "1234567890123546",
  "tempat_lahir": "Jakarta",
  "tanggal_lahir": "2005-05-15",
  "jenis_kelamin": "L",
  "alamat": "Jl. Merdeka No. 456",
  "provinsi": "DKI Jakarta",
  "kota_kabupaten": "Jakarta Selatan",
  "kode_pos": "12345",
  "no_hp": "081234567890",
  "email": "ahmad.updated@example.com",
  "asal_sekolah": "SMP Negeri 1 Jakarta",
  "tahun_lulus": 2023,
  "tanggal_daftar": "2025-05-13T10:30:00Z"
}
```

### 5. Delete Student
**DELETE** `/api/students/{nomor}`

**Response (204 No Content)**

## Authentication

All API endpoints except authentication endpoints require JWT token in the Authorization header.

### Headers for Protected Routes
```http
Authorization: Bearer <your-jwt-token>
```

### Authentication Endpoints

#### 1. Register New User
**POST** `/api/auth/register`

**Headers:**
```http
Content-Type: application/json
```

**Request Body:**
```json
{
  "username": "testuser",
  "password": "password123",
  "email": "test@example.com"
}
```

**Response (201 Created):**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "username": "testuser",
  "email": "test@example.com",
  "role": "user",
  "created_at": "2025-05-15T10:30:00Z",
  "last_login_at": null
}
```

#### 2. Login
**POST** `/api/auth/login`

**Headers:**
```http
Content-Type: application/json
```

**Request Body:**
```json
{
  "username": "testuser",
  "password": "password123"
}
```

**Response (200 OK):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "username": "testuser",
    "email": "test@example.com",
    "role": "user",
    "created_at": "2025-05-15T10:30:00Z",
    "last_login_at": "2025-05-15T10:35:00Z"
  }
}
```

### Default Admin Account
```
Username: admin
Password: admin123
```

### Authentication Error Responses

**Invalid Credentials (401 Unauthorized):**
```json
{
  "error": "username atau password salah"
}
```

**Missing Token (401 Unauthorized):**
```json
{
  "error": "Authorization header is required"
}
```

**Invalid Token (401 Unauthorized):**
```json
{
  "error": "Invalid token"
}
```

**Insufficient Permissions (403 Forbidden):**
```json
{
  "error": "Admin access required"
}
```

### Role-Based Access Control

1. Public Endpoints (no authentication required):
   - POST `/api/auth/register`
   - POST `/api/auth/login`
   - GET `/api/articles`
   - GET `/api/articles/{id}`

2. Authenticated User Access:
   - POST `/api/students` (one registration per user)
   - GET `/api/students/my-registration` (view own registration)

3. Admin Only Access:
   - POST, PUT, DELETE `/api/articles/*`
   - GET `/api/students` (view all)
   - GET `/api/students/{nomor}`
   - PUT `/api/students/{nomor}`
   - DELETE `/api/students/{nomor}`

### Environment Variables
Add these variables to your `.env` file:
```env
JWT_SECRET=your-256-bit-secret  # Required for JWT signing
```

For detailed information about the access control system and user registration limits, please see [Access Control Documentation](docs/access_control.md).

## Setup and Usage

### Prerequisites
- Go 1.18+
- PostgreSQL v15+
- Postman/curl/Thunder Client

### Installation
```bash
# Clone repository
git clone <repository-url>

# Change directory
cd website_pesantren/BackEnd

# Initialize Go module (if not already done)
go mod init website_pesantren

# Install dependencies
go mod tidy
go mod download

# Setup environment variables
cp .env.example .env

# Edit .env file sesuai konfigurasi database
```

### Dependencies
Main external packages used:
```go
github.com/gin-gonic/gin       // Web framework
github.com/lib/pq              // PostgreSQL driver
github.com/joho/godotenv       // Environment configuration
github.com/go-playground/validator/v10  // Validation
```

### Database Setup
```bash
# Create database
createdb web-pesantren

# Run prerequisites (creates tables and extensions)
psql -U postgres -d web-pesantren -a -f db/prequisite.sql
```

### Running the Server
```bash
# Run in development mode
go run main.go

# Build for production
go build -o website_pesantren

# Run in production mode
GIN_MODE=release ./website_pesantren

# Cross compile for different platforms (if needed)
# For Windows
GOOS=windows GOARCH=amd64 go build -o website_pesantren.exe

# For Linux
GOOS=linux GOARCH=amd64 go build -o website_pesantren
```

### Development Tools
- Install Air for hot reload (optional)
```bash
go install github.com/cosmtrek/air@latest

# Run with hot reload
air
```

### Environment Variables
Create a `.env` file with the following variables:
```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=web-pesantren
```

## Testing

### Running Tests
```bash
# Run all tests
go test ./...

# Run tests with coverage
go test -cover ./...

# Run specific package tests
go test ./controllers
go test ./services
```

### Manual Testing Examples

### Student API Examples

#### 1. Create Student
```bash
curl -X POST http://localhost:8080/api/students \
  -H "Content-Type: application/json" \
  -d '{
    "nama_lengkap": "Ahmad Budiman",
    "nik": "1234567890123546",
    "tempat_lahir": "Jakarta",
    "tanggal_lahir": "2005-05-15",
    "jenis_kelamin": "L",
    "alamat": "Jl. Merdeka No. 123",
    "provinsi": "DKI Jakarta",
    "kota_kabupaten": "Jakarta Selatan",
    "kode_pos": "12345",
    "no_hp": "081234567890",
    "email": "ahmad3@example.com",
    "asal_sekolah": "SMP Negeri 1 Jakarta",
    "tahun_lulus": 2023
  }'
```

#### 2. Get All Students (with pagination)
```bash
# Get first page with default limit (10 items)
curl http://localhost:8080/api/students

# Get specific page and limit
curl http://localhost:8080/api/students?page=2&limit=20

# Maximum items per page is 50
curl http://localhost:8080/api/students?page=1&limit=50
```

#### 3. Get Student by Registration Number
```bash
curl http://localhost:8080/api/students/YNH-2025-0001
```

#### 4. Update Student
```bash
curl -X PUT http://localhost:8080/api/students/YNH-2025-0001 \
  -H "Content-Type: application/json" \
  -d '{
    "nama_lengkap": "Ahmad Budiman",
    "tempat_lahir": "Jakarta",
    "tanggal_lahir": "2005-05-15",
    "jenis_kelamin": "L",
    "alamat": "Jl. Merdeka No. 456",
    "provinsi": "DKI Jakarta",
    "kota_kabupaten": "Jakarta Selatan",
    "kode_pos": "12345",
    "no_hp": "081234567890",
    "email": "ahmad.updated@example.com",
    "asal_sekolah": "SMP Negeri 1 Jakarta",
    "tahun_lulus": 2023
  }'
```

#### 5. Delete Student
```bash
curl -X DELETE http://localhost:8080/api/students/YNH-2025-0001
```

### Article API Examples

#### 1. Create Article
```bash
curl -X POST http://localhost:8080/api/articles \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Belajar Coding",
    "header": "Dasar-dasar Pemrograman",
    "author": "Sarah Smith",
    "body": "Materi pembelajaran coding...",
    "photo": "https://example.com/coding.jpg"
  }'
```

#### 2. Get All Articles (with pagination)
```bash
# Get first page with default limit (10 items)
curl http://localhost:8080/api/articles

# Get specific page and limit
curl http://localhost:8080/api/articles?page=2&limit=20

# Maximum items per page is 50
curl http://localhost:8080/api/articles?page=1&limit=50
```

#### 3. Get Article by ID
```bash
curl http://localhost:8080/api/articles/1
```

#### 4. Update Article
```bash
curl -X PUT http://localhost:8080/api/articles/1 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Title",
    "header": "Updated Header",
    "author": "Updated Author",
    "body": "Updated content...",
    "photo": "https://example.com/updated.jpg"
  }'
```

#### 5. Delete Article
```bash
curl -X DELETE http://localhost:8080/api/articles/1
```

### Authentication Examples

#### 1. Register New User
```bash
curl -X POST http://localhost:8080/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "password": "password123",
    "email": "test@example.com"
  }'
```

#### 2. Login and Get Token
```bash
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "password": "password123"
  }'
```

#### 3. Using Protected Endpoints
```bash
# Store your token in a variable (Linux/Mac)
TOKEN=$(curl -s -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "testuser", "password": "password123"}' \
  | jq -r '.token')

# Use the token with protected endpoints
curl http://localhost:8080/api/articles \
  -H "Authorization: Bearer $TOKEN"

# Admin-only endpoint example
curl -X POST http://localhost:8080/api/articles \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "New Article",
    "header": "Article Header",
    "author": "John Doe",
    "body": "Article content..."
  }'
```

### Example Response Formats

#### Successful Paginated Response
```json
{
  "data": [...],
  "pagination": {
    "current_page": 1,
    "per_page": 10,
    "total": 25,
    "total_pages": 3
  }
}
```

#### Error Response
```json
{
  "error": "Invalid request payload",
  "details": "Field validation failed"
}
```

## Validation Rules

### Student Validation
| Field            | Rules                                            |
|------------------|--------------------------------------------------|
| nama_lengkap     | Required, string (max 100)                       |
| nik              | Required, exactly 16 digits                      |
| tempat_lahir     | Required, string (max 50)                        |
| tanggal_lahir    | Required, date format (YYYY-MM-DD)               |
| jenis_kelamin    | Required, enum ("L" or "P")                      |
| alamat           | Required, string                                 |
| provinsi         | Required, string (max 50)                        |
| kota_kabupaten   | Required, string (max 50)                        |
| kode_pos         | Required, string (max 10)                        |
| no_hp            | Required, string (max 15)                        |
| email            | Required, valid email format (max 100)           |
| asal_sekolah     | Required, string (max 100)                       |
| tahun_lulus      | Required, number (2000-2025)                     |

### Article Validation
| Field   | Rules                          |
|---------|--------------------------------|
| title   | Required, string (max 255)     |
| header  | Required, string (max 255)     |
| date    | Optional, ISO8601 date format  |
| author  | Required, string (max 255)     |
| body    | Required, string               |
| photo   | Optional, valid URL format     |

### User Validation
| Field            | Rules                                     |
|------------------|-------------------------------------------|
| username         | Required, string (max 50), unique         |
| password         | Required, string (min 8 characters)       |
| email            | Required, valid email format, unique      |
| role             | Auto-assigned, enum ("user" or "admin")   |

### Student Model Fields
| Field            | Description                                        |
|-----------------|--------------------------------------------------|
| id_pendaftaran  | UUID v4, auto-generated                          |
| nomor_pendaftaran| Format: YNH-{year}-{sequence}                    |
| user_id         | UUID of the authenticated user who registered     |
| nama_lengkap    | Student's full name                              |
| nik             | National ID number (16 digits)                    |
| tempat_lahir    | Place of birth                                   |
| tanggal_lahir   | Date of birth (YYYY-MM-DD)                       |
| jenis_kelamin   | Gender ("L" or "P")                              |
| alamat          | Address                                          |
| provinsi        | Province                                         |
| kota_kabupaten  | City/Regency                                     |
| kode_pos        | Postal code                                      |
| no_hp           | Phone number                                     |
| email           | Email address                                    |
| asal_sekolah    | Previous school                                  |
| tahun_lulus     | Graduation year (2000-2025)                      |
| tanggal_daftar  | Registration date (auto-set to current timestamp)|

### Notes:
- `user_id` is automatically set based on the authenticated user making the registration
- Each user can only have one active registration
- `user_id` will be included in all student responses when the data exists
- For admin users, all student data is accessible regardless of `user_id`
- Regular users can only access their own registration data via `/my-registration` endpoint