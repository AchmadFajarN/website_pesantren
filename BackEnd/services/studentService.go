package services

import (
	"fmt"
	"website_pesantren/models"
	"website_pesantren/repositories"
)

// StudentService handles business logic for students
type StudentService struct {
	repo *repositories.StudentRepository
}

// NewStudentService creates a new student Service instance
func NewStudentService(repo *repositories.StudentRepository) *StudentService {
	return &StudentService{
		repo: repo,
	}
}

// CreateStudent creates a new student after validating the input and checking for duplicates
func (s *StudentService) CreateStudent(student *models.Student) (*models.Student, error) {
	// Validate student data
	if err := models.ValidateStudent(student); err != nil {
		return nil, fmt.Errorf("validation error: %v", err)
	}

	// Check for existing NIK
	existingNIK, err := s.repo.FindByNIK(student.NIK)
	if err != nil {
		return nil, fmt.Errorf("error checking NIK: %v", err)
	}
	if existingNIK != nil {
		return nil, fmt.Errorf("NIK sudah terdaftar")
	}

	// Check for existing email
	existingEmail, err := s.repo.FindByEmail(student.Email)
	if err != nil {
		return nil, fmt.Errorf("error checking email: %v", err)
	}
	if existingEmail != nil {
		return nil, fmt.Errorf("Email sudah terdaftar")
	}

	// Create student in repository
	createdStudent, err := s.repo.Create(student)
	if err != nil {
		return nil, fmt.Errorf("failed to create student: %v", err)
	}

	return createdStudent, nil
}

// GetAllStudents retrieves all students with pagination
func (s *StudentService) GetAllStudents(page, limit int) ([]models.Student, int, error) {
	offset := (page - 1) * limit
	students, total, err := s.repo.FindAll(offset, limit)
	if err != nil {
		return nil, 0, fmt.Errorf("failed to fetch students: %v", err)
	}
	return students, total, nil
}

// GetStudentByNomor retrieves a student by their registration number
func (s *StudentService) GetStudentByNomor(nomor string) (*models.Student, error) {
	student, err := s.repo.FindByNomorPendaftaran(nomor)
	if err != nil {
		return nil, fmt.Errorf("failed to fetch student: %v", err)
	}
	if student == nil {
		return nil, fmt.Errorf("Siswa tidak ditemukan")
	}
	return student, nil
}

// UpdateStudent updates an existing student after validating the input
func (s *StudentService) UpdateStudent(nomorPendaftaran string, studentData *models.Student) (*models.Student, error) {
	// Validate student data
	if err := models.ValidateStudent(studentData); err != nil {
		return nil, fmt.Errorf("validation error: %v", err)
	}

	// Check if student exists
	existingStudent, err := s.repo.FindByNomorPendaftaran(nomorPendaftaran)
	if err != nil {
		return nil, fmt.Errorf("error fetching existing student: %v", err)
	}
	if existingStudent == nil {
		return nil, fmt.Errorf("Siswa tidak ditemukan")
	}

	// Check for email uniqueness if email is being changed
	if studentData.Email != existingStudent.Email {
		emailExists, err := s.repo.FindByEmail(studentData.Email)
		if err != nil {
			return nil, fmt.Errorf("error checking email: %v", err)
		}
		if emailExists != nil {
			return nil, fmt.Errorf("Email sudah terdaftar")
		}
	}

	// Preserve existing email if not provided in update data
	if studentData.Email == "" {
		studentData.Email = existingStudent.Email
	}

	// Update student in repository
	updatedStudent, err := s.repo.Update(nomorPendaftaran, studentData)
	if err != nil {
		return nil, fmt.Errorf("failed to update student: %v", err)
	}

	return updatedStudent, nil
}

// DeleteStudent removes a student by their registration number
func (s *StudentService) DeleteStudent(nomor string) error {
	// Check if student exists
	student, err := s.repo.FindByNomorPendaftaran(nomor)
	if err != nil {
		return fmt.Errorf("failed to fetch student: %v", err)
	}
	if student == nil {
		return fmt.Errorf("Siswa tidak ditemukan")
	}

	// Delete student from repository
	if err := s.repo.Delete(nomor); err != nil {
		return fmt.Errorf("failed to delete student: %v", err)
	}

	return nil
}
