CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TYPE GENDER AS ENUM ('Laki-laki', 'Perempuan');

CREATE TABLE registration_sequence (
  year INT PRIMARY KEY,
  last_sequence INT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS students (
  id_pendaftaran UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  nomor_pendaftaran VARCHAR(20) UNIQUE NOT NULL,
  nama_lengkap VARCHAR(100) NOT NULL,
  nik CHAR(16) UNIQUE NOT NULL,
  tempat_lahir VARCHAR(50) NOT NULL,
  tanggal_lahir DATE NOT NULL,
  jenis_kelamin GENDER NOT NULL,
  alamat TEXT NOT NULL,
  provinsi VARCHAR(50) NOT NULL,
  kota_kabupaten VARCHAR(50) NOT NULL,
  kode_pos VARCHAR(10) NOT NULL,
  no_hp VARCHAR(15) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  asal_sekolah VARCHAR(100) NOT NULL,
  tahun_lulus INT NOT NULL,
  tanggal_daftar TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS articles (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  header VARCHAR(255) NOT NULL,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  author VARCHAR(255) NOT NULL,
  body TEXT NOT NULL,
  photo VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(36) PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    role VARCHAR(20) NOT NULL DEFAULT 'user',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_login_at TIMESTAMP
);

CREATE INDEX IF NOT EXISTS users_username_idx ON users(username);
CREATE INDEX IF NOT EXISTS users_email_idx ON users(email);

INSERT INTO users (id, username, password, email, role, created_at)
VALUES (
    'a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6',
    'admin',
    '$2a$10$kqDRMhGmBglxPY4fO6TyEOPnw5k9lMBe7lMZIY3pGTbWmHNTHN5vG',
    'admin@example.com',
    'admin',
    CURRENT_TIMESTAMP
) ON CONFLICT (username) DO NOTHING;

-- Add user_id column to students table and set up foreign key constraint
-- Ensure that the user_id column is unique to prevent multiple registrations by the same user
ALTER TABLE students ADD COLUMN user_id VARCHAR(36);
ALTER TABLE students ADD CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users(id);
CREATE INDEX idx_students_user_id ON students(user_id);
ALTER TABLE students ADD CONSTRAINT unique_user_registration UNIQUE (user_id);