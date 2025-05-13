package repositories

import (
	"database/sql"
	"fmt"
	"time"
	"website_pesantren/models"
)

// StudentRepository handles all database operations for students
type StudentRepository struct {
	db *sql.DB
}

// NewStudentRepository creates a new student repository instance
func NewStudentRepository(db *sql.DB) *StudentRepository {
	return &StudentRepository{db: db}
}

// convertGender converts gender format between API and database
func convertGender(gender string, toDatabase bool) string {
	if toDatabase {
		if gender == "L" {
			return "Laki-laki"
		}
		return "Perempuan"
	} else {
		if gender == "Laki-laki" {
			return "L"
		}
		return "P"
	}
}

// generateRegistrationNumber generates a unique registration number for new students
func (r *StudentRepository) generateRegistrationNumber() (string, error) {
	year := time.Now().Year()
	tx, err := r.db.Begin()
	if err != nil {
		return "", err
	}
	defer tx.Rollback()

	var sequence int
	err = tx.QueryRow(`
		INSERT INTO registration_sequence (year) VALUES ($1)
		ON CONFLICT (year) DO UPDATE SET last_sequence = registration_sequence.last_sequence + 1
		RETURNING last_sequence`,
		year).Scan(&sequence)

	if err != nil {
		return "", err
	}

	if err = tx.Commit(); err != nil {
		return "", err
	}

	return fmt.Sprintf("YNH-%d-%04d", year, sequence), nil
}

// Create inserts a new student into the database
func (r *StudentRepository) Create(student *models.Student) (*models.Student, error) {
	nomorPendaftaran, err := r.generateRegistrationNumber()
	if err != nil {
		return nil, fmt.Errorf("failed to generate registration number: %v", err)
	}
	query := `
		INSERT INTO students (
			id_pendaftaran, nomor_pendaftaran, nama_lengkap, nik, tempat_lahir,
			tanggal_lahir, jenis_kelamin, alamat, provinsi,
			kota_kabupaten, kode_pos, no_hp, email,
			asal_sekolah, tahun_lulus, tanggal_daftar
		) VALUES (uuid_generate_v4(), $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, CURRENT_TIMESTAMP)
		RETURNING id_pendaftaran, nomor_pendaftaran, nama_lengkap, nik, tempat_lahir,
				  tanggal_lahir, jenis_kelamin, alamat, provinsi,
				  kota_kabupaten, kode_pos, no_hp, email,
				  asal_sekolah, tahun_lulus, tanggal_daftar`
	var result models.Student
	var dbGender string
	err = r.db.QueryRow(
		query,
		nomorPendaftaran,
		student.NamaLengkap,
		student.NIK,
		student.TempatLahir,
		student.TanggalLahir,
		convertGender(student.JenisKelamin, true),
		student.Alamat,
		student.Provinsi,
		student.KotaKabupaten,
		student.KodePos,
		student.NoHP,
		student.Email,
		student.AsalSekolah,
		student.TahunLulus,
	).Scan(
		&result.IDPendaftaran,
		&result.NomorPendaftaran,
		&result.NamaLengkap,
		&result.NIK,
		&result.TempatLahir,
		&result.TanggalLahir,
		&dbGender,
		&result.Alamat,
		&result.Provinsi,
		&result.KotaKabupaten,
		&result.KodePos,
		&result.NoHP,
		&result.Email,
		&result.AsalSekolah,
		&result.TahunLulus,
		&result.TanggalDaftar,
	)
	if err != nil {
		return nil, fmt.Errorf("failed to create student: %v", err)
	}

	result.JenisKelamin = convertGender(dbGender, false)
	return &result, nil
}

// FindAll retrieves all students ordered by registration date
func (r *StudentRepository) FindAll() ([]models.Student, error) {
	rows, err := r.db.Query("SELECT * FROM students ORDER BY tanggal_daftar DESC")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var students []models.Student
	for rows.Next() {
		var student models.Student
		err := rows.Scan(
			&student.IDPendaftaran,
			&student.NomorPendaftaran,
			&student.NamaLengkap,
			&student.NIK,
			&student.TempatLahir,
			&student.TanggalLahir,
			&student.JenisKelamin,
			&student.Alamat,
			&student.Provinsi,
			&student.KotaKabupaten,
			&student.KodePos,
			&student.NoHP,
			&student.Email,
			&student.AsalSekolah,
			&student.TahunLulus,
			&student.TanggalDaftar,
		)
		if err != nil {
			return nil, err
		}
		students = append(students, student)
	}
	return students, rows.Err()
}

// FindByNomorPendaftaran retrieves a student by their registration number
func (r *StudentRepository) FindByNomorPendaftaran(nomor string) (*models.Student, error) {
	var student models.Student
	err := r.db.QueryRow("SELECT * FROM students WHERE nomor_pendaftaran = $1", nomor).Scan(
		&student.IDPendaftaran,
		&student.NomorPendaftaran,
		&student.NamaLengkap,
		&student.NIK,
		&student.TempatLahir,
		&student.TanggalLahir,
		&student.JenisKelamin,
		&student.Alamat,
		&student.Provinsi,
		&student.KotaKabupaten,
		&student.KodePos,
		&student.NoHP,
		&student.Email,
		&student.AsalSekolah,
		&student.TahunLulus,
		&student.TanggalDaftar,
	)
	if err == sql.ErrNoRows {
		return nil, nil
	}
	if err != nil {
		return nil, err
	}
	return &student, nil
}

// FindByNIK retrieves a student by their NIK
func (r *StudentRepository) FindByNIK(nik string) (*models.Student, error) {
	var student models.Student
	err := r.db.QueryRow("SELECT * FROM students WHERE nik = $1", nik).Scan(
		&student.IDPendaftaran,
		&student.NomorPendaftaran,
		&student.NamaLengkap,
		&student.NIK,
		&student.TempatLahir,
		&student.TanggalLahir,
		&student.JenisKelamin,
		&student.Alamat,
		&student.Provinsi,
		&student.KotaKabupaten,
		&student.KodePos,
		&student.NoHP,
		&student.Email,
		&student.AsalSekolah,
		&student.TahunLulus,
		&student.TanggalDaftar,
	)
	if err == sql.ErrNoRows {
		return nil, nil
	}
	if err != nil {
		return nil, err
	}
	return &student, nil
}

// FindByEmail retrieves a student by their email
func (r *StudentRepository) FindByEmail(email string) (*models.Student, error) {
	var student models.Student
	err := r.db.QueryRow("SELECT * FROM students WHERE email = $1", email).Scan(
		&student.IDPendaftaran,
		&student.NomorPendaftaran,
		&student.NamaLengkap,
		&student.NIK,
		&student.TempatLahir,
		&student.TanggalLahir,
		&student.JenisKelamin,
		&student.Alamat,
		&student.Provinsi,
		&student.KotaKabupaten,
		&student.KodePos,
		&student.NoHP,
		&student.Email,
		&student.AsalSekolah,
		&student.TahunLulus,
		&student.TanggalDaftar,
	)
	if err == sql.ErrNoRows {
		return nil, nil
	}
	if err != nil {
		return nil, err
	}
	return &student, nil
}

// Update modifies an existing student's information
func (r *StudentRepository) Update(nomor string, student *models.Student) (*models.Student, error) {
	query := `
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
		RETURNING *`

	var result models.Student
	err := r.db.QueryRow(
		query,
		student.NamaLengkap,
		student.TempatLahir,
		student.TanggalLahir,
		convertGender(student.JenisKelamin, true),
		student.Alamat,
		student.Provinsi,
		student.KotaKabupaten,
		student.KodePos,
		student.NoHP,
		student.Email,
		student.AsalSekolah,
		student.TahunLulus,
		nomor,
	).Scan(
		&result.IDPendaftaran,
		&result.NomorPendaftaran,
		&result.NamaLengkap,
		&result.NIK,
		&result.TempatLahir,
		&result.TanggalLahir,
		&result.JenisKelamin,
		&result.Alamat,
		&result.Provinsi,
		&result.KotaKabupaten,
		&result.KodePos,
		&result.NoHP,
		&result.Email,
		&result.AsalSekolah,
		&result.TahunLulus,
		&result.TanggalDaftar,
	)

	if err == sql.ErrNoRows {
		return nil, nil
	}
	if err != nil {
		return nil, err
	}
	return &result, nil
}

// Delete removes a student from the database
func (r *StudentRepository) Delete(nomor string) error {
	result, err := r.db.Exec("DELETE FROM students WHERE nomor_pendaftaran = $1", nomor)
	if err != nil {
		return err
	}

	rowsAffected, err := result.RowsAffected()
	if err != nil {
		return err
	}

	if rowsAffected == 0 {
		return sql.ErrNoRows
	}

	return nil
}
