const pool = require('../config/db');

class StudentRepository {
  async create(studentData) {
    const query = `
      INSERT INTO students (
        nomor_pendaftaran, nama_lengkap, nik, tempat_lahir, 
        tanggal_lahir, jenis_kelamin, alamat, provinsi, 
        kota_kabupaten, kode_pos, no_hp, email, 
        asal_sekolah, tahun_lulus
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
      RETURNING *
    `;
    
    const values = [
      studentData.nomor_pendaftaran,
      studentData.nama_lengkap,
      studentData.nik,
      studentData.tempat_lahir,
      studentData.tanggal_lahir,
      studentData.jenis_kelamin,
      studentData.alamat,
      studentData.provinsi,
      studentData.kota_kabupaten,
      studentData.kode_pos,
      studentData.no_hp,
      studentData.email,
      studentData.asal_sekolah,
      studentData.tahun_lulus
    ];

    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  async findAll() {
    const { rows } = await pool.query('SELECT * FROM students ORDER BY tanggal_daftar DESC');
    return rows;
  }

  async findByNomorPendaftaran(nomor) {
    const { rows } = await pool.query('SELECT * FROM students WHERE nomor_pendaftaran = $1', [nomor]);
    return rows[0];
  }

  async findByNIK(nik) {
    const { rows } = await pool.query('SELECT * FROM students WHERE nik = $1', [nik]);
    return rows[0];
  }

  async findByEmail(email) {
    const { rows } = await pool.query('SELECT * FROM students WHERE email = $1', [email]);
    return rows[0];
  }

  async update(nomor, studentData) {
    const query = `
      UPDATE students SET
        nama_lengkap = $1,
        tempat_lahir = $2,
        tanggal_lahir = $3,
        jenis_kelamin = $4,
        alamat = $5,
        provinsi = $6,
        kota_kabupaten = $7,
        kode_pos = $8,
        no_hp = $9,
        email = $10,
        asal_sekolah = $11,
        tahun_lulus = $12
      WHERE nomor_pendaftaran = $13
      RETURNING *
    `;
    
    const values = [
      studentData.nama_lengkap,
      studentData.tempat_lahir,
      studentData.tanggal_lahir,
      studentData.jenis_kelamin,
      studentData.alamat,
      studentData.provinsi,
      studentData.kota_kabupaten,
      studentData.kode_pos,
      studentData.no_hp,
      studentData.email,
      studentData.asal_sekolah,
      studentData.tahun_lulus,
      nomor
    ];

    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  async delete(nomor) {
    await pool.query('DELETE FROM students WHERE nomor_pendaftaran = $1', [nomor]);
  }
}

module.exports = new StudentRepository();