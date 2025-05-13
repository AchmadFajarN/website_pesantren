CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TYPE GENDER AS ENUM ('Laki-laki', 'Perempuan');

CREATE TABLE registration_sequence (
  year INT PRIMARY KEY,
  last_sequence INT NOT NULL DEFAULT 0
);

CREATE TABLE students (
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

CREATE TABLE articles (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  header VARCHAR(255) NOT NULL,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  author VARCHAR(255) NOT NULL,
  body TEXT NOT NULL,
  photo VARCHAR(255)
);