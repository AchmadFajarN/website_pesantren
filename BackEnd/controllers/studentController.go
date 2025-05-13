package controllers

import (
	"net/http"
	"website_pesantren/models"
	"website_pesantren/services"

	"github.com/gin-gonic/gin"
)

// StudentController handles HTTP requests for students
type StudentController struct {
	service *services.StudentService
}

// NewStudentController creates a new student controller instance
func NewStudentController(service *services.StudentService) *StudentController {
	return &StudentController{
		service: service,
	}
}

// CreateStudent handles the creation of a new student
func (c *StudentController) CreateStudent(ctx *gin.Context) {
	var student models.Student
	if err := ctx.ShouldBindJSON(&student); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"error":   "Invalid request payload",
			"details": err.Error(),
		})
		return
	}

	if err := models.ValidateStudent(&student); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"error":   "Validation failed",
			"details": err.Error(),
		})
		return
	}

	newStudent, err := c.service.CreateStudent(&student)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"error":   "Failed to create student",
			"details": err.Error(),
		})
		return
	}

	ctx.JSON(http.StatusCreated, newStudent)
}

// GetAllStudents handles retrieving all students
func (c *StudentController) GetAllStudents(ctx *gin.Context) {
	students, err := c.service.GetAllStudents()
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch students"})
		return
	}

	ctx.JSON(http.StatusOK, students)
}

// GetStudentByNomor handles retrieving a single student by registration number
func (c *StudentController) GetStudentByNomor(ctx *gin.Context) {
	nomor := ctx.Param("nomor")
	if nomor == "" {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Missing registration number"})
		return
	}

	student, err := c.service.GetStudentByNomor(nomor)
	if err != nil {
		switch err.Error() {
		case "Siswa tidak ditemukan":
			ctx.JSON(http.StatusNotFound, gin.H{"error": err.Error()})
			return
		default:
			ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch student"})
			return
		}
	}

	ctx.JSON(http.StatusOK, student)
}

// UpdateStudent handles updating an existing student
func (c *StudentController) UpdateStudent(ctx *gin.Context) {
	nomor := ctx.Param("nomor")
	if nomor == "" {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Missing registration number"})
		return
	}

	var student models.Student
	if err := ctx.ShouldBindJSON(&student); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request payload"})
		return
	}

	updatedStudent, err := c.service.UpdateStudent(nomor, &student)
	if err != nil {
		switch err.Error() {
		case "Siswa tidak ditemukan":
			ctx.JSON(http.StatusNotFound, gin.H{"error": err.Error()})
			return
		case "Email sudah terdaftar":
			ctx.JSON(http.StatusConflict, gin.H{"error": err.Error()})
			return
		default:
			ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}
	}

	ctx.JSON(http.StatusOK, updatedStudent)
}

// DeleteStudent handles deleting a student
func (c *StudentController) DeleteStudent(ctx *gin.Context) {
	nomor := ctx.Param("nomor")
	if nomor == "" {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Missing registration number"})
		return
	}

	if err := c.service.DeleteStudent(nomor); err != nil {
		switch err.Error() {
		case "Siswa tidak ditemukan":
			ctx.JSON(http.StatusNotFound, gin.H{"error": err.Error()})
			return
		default:
			ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete student"})
			return
		}
	}

	ctx.Status(http.StatusNoContent)
}
