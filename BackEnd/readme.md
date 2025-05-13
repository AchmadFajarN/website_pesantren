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

**Response (200 OK):**
```json
[
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
]
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

**Request Body:** Same as Create New Student

**Response (200 OK):** Same as Get Student

### 5. Delete Student
**DELETE** `/api/students/{nomor}`

**Response (204 No Content)**

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

# Install dependencies
go mod download

# Setup environment variables (copy .env.example)
cp .env.example .env

# Edit .env file sesuai konfigurasi database Anda
nano .env
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
# Run the server
go run main.go

# For production, build and run
go build
./website_pesantren
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

## Testing Examples

### Create Student (curl)
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

### Create Article (curl)
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

### Student Validation
| Field            | Rules                                            |
|------------------|--------------------------------------------------|
| nama_lengkap     | Required, string (max 100)                      |
| nik              | Required, exactly 16 digits                      |
| tempat_lahir     | Required, string (max 50)                       |
| tanggal_lahir    | Required, date format (YYYY-MM-DD)              |
| jenis_kelamin    | Required, enum ("L" or "P")                     |
| alamat           | Required, string                                |
| provinsi         | Required, string (max 50)                       |
| kota_kabupaten   | Required, string (max 50)                       |
| kode_pos         | Required, string (max 10)                       |
| no_hp            | Required, string (max 15)                       |
| email            | Required, valid email format (max 100)          |
| asal_sekolah     | Required, string (max 100)                      |
| tahun_lulus      | Required, number (2000-2025)                    |

### Article Validation
| Field   | Rules                          |
|---------|--------------------------------|
| title   | Required, string (max 255)     |
| header  | Required, string (max 255)     |
| date    | Optional, ISO8601 date format  |
| author  | Required, string (max 255)     |
| body    | Required, string               |
| photo   | Optional, valid URL format     |