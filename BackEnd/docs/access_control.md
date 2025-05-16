# Website Pesantren API Documentation

## Base URLs
- Articles: `http://localhost:8080/api/articles`
- Students: `http://localhost:8080/api/students`

## Role-Based Access Control

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

## Note on Student Registration
Each user can only create one student registration. Attempting to create multiple registrations will result in a 409 Conflict error with the message "user already has an existing registration".

## Additional Error Responses
In addition to the standard error responses, the following errors may occur:

**User Registration Limit (409 Conflict):**
```json
{
  "error": "user already has an existing registration"
}
```

**No Registration Found (404 Not Found):**
```json
{
  "error": "no registration found for this user"
}
```

## New Student Endpoint

### Get My Registration
**GET** `/api/students/my-registration`

**Headers:**
```http
Authorization: Bearer <your-jwt-token>
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
  "alamat": "Jl. Merdeka No. 123",
  "provinsi": "DKI Jakarta",
  "kota_kabupaten": "Jakarta Selatan",
  "kode_pos": "12345",
  "no_hp": "081234567890",
  "email": "ahmad3@example.com",
  "asal_sekolah": "SMP Negeri 1 Jakarta",
  "tahun_lulus": 2023,
  "tanggal_daftar": "2025-05-13T10:30:00Z",
  "user_id": "550e8400-e29b-41d4-a716-446655440000"
}
```
