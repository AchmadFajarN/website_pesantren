package models

import (
	"time"

	"github.com/go-playground/validator/v10"
)

// Student represents the student model
type Student struct {
	UserID           string `json:"user_id" db:"user_id"`
	IDPendaftaran    string `json:"id_pendaftaran,omitempty" db:"id_pendaftaran"`
	NomorPendaftaran string `json:"nomor_pendaftaran,omitempty" db:"nomor_pendaftaran"`
	NamaLengkap      string `json:"nama_lengkap" binding:"required" validate:"required,max=100"`
	NIK              string `json:"nik" binding:"required" validate:"required,len=16,numeric"`
	TempatLahir      string `json:"tempat_lahir" binding:"required" validate:"required,max=50"`
	TanggalLahir     string `json:"tanggal_lahir" binding:"required" validate:"required,datetime=2006-01-02"`
	TanggalDaftar    string `json:"tanggal_daftar,omitempty" db:"tanggal_daftar"`
	JenisKelamin     string `json:"jenis_kelamin" binding:"required" validate:"required,oneof=L P"`
	Alamat           string `json:"alamat" binding:"required" validate:"required"`
	Provinsi         string `json:"provinsi" binding:"required" validate:"required,max=50"`
	KotaKabupaten    string `json:"kota_kabupaten" binding:"required" validate:"required,max=50"`
	KodePos          string `json:"kode_pos" binding:"required" validate:"required,max=10"`
	NoHP             string `json:"no_hp" binding:"required" validate:"required,max=15"`
	Email            string `json:"email" binding:"required" validate:"required,email,max=100"`
	AsalSekolah      string `json:"asal_sekolah" binding:"required" validate:"required,max=100"`
	TahunLulus       int    `json:"tahun_lulus" binding:"required" validate:"required,min=2000,max=2025"`
}

// CustomValidator is a custom validation type
type CustomValidator struct {
	validator *validator.Validate
}

// ValidateStudent validates the student data
func ValidateStudent(student *Student) error {
	validate := validator.New()

	// Register custom validation for checking date is not in future
	validate.RegisterValidation("ltefield", func(fl validator.FieldLevel) bool {
		if fl.Field().Interface().(time.Time).After(time.Now()) {
			return false
		}
		return true
	})

	return validate.Struct(student)
}
