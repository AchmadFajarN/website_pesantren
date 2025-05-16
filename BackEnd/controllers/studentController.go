package controllers

import (
	"net/http"
	"strconv"
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
	// Get user ID from context (set by auth middleware)
	userID, exists := ctx.Get("user_id")
	if !exists {
		ctx.JSON(http.StatusUnauthorized, gin.H{"error": "user not authenticated"})
		return
	}

	var student models.Student
	if err := ctx.ShouldBindJSON(&student); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"error":   "invalid request payload",
			"details": err.Error(),
		})
		return
	}

	if err := models.ValidateStudent(&student); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"error":   "validation failed",
			"details": err.Error(),
		})
		return
	}

	newStudent, err := c.service.CreateStudent(&student, userID.(string))
	if err != nil {
		status := http.StatusBadRequest
		if err.Error() == "user already has an existing registration" {
			status = http.StatusConflict
		}
		ctx.JSON(status, gin.H{
			"error": err.Error(),
		})
		return
	}

	ctx.JSON(http.StatusCreated, newStudent)
}

// GetAllStudents handles retrieving all students with pagination
func (c *StudentController) GetAllStudents(ctx *gin.Context) {
	// Get pagination parameters from query string
	page, err := strconv.Atoi(ctx.DefaultQuery("page", "1"))
	if err != nil || page < 1 {
		page = 1
	}

	limit, err := strconv.Atoi(ctx.DefaultQuery("limit", "10"))
	if err != nil || limit < 1 {
		limit = 10
	}

	// Set maximum limit to prevent excessive data fetching
	if limit > 50 {
		limit = 50
	}

	students, total, err := c.service.GetAllStudents(page, limit)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch students"})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{
		"data": students,
		"pagination": gin.H{
			"current_page": page,
			"per_page":     limit,
			"total":        total,
			"total_pages":  (total + limit - 1) / limit,
		},
	})
}

// GetStudentByNomor handles retrieving a single student by registration number
func (c *StudentController) GetStudentByNomor(ctx *gin.Context) {
	nomor := ctx.Param("nomor")
	if nomor == "" {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "missing registration number"})
		return
	}

	student, err := c.service.GetStudentByNomor(nomor)
	if err != nil {
		switch err.Error() {
		case "siswa tidak ditemukan":
			ctx.JSON(http.StatusNotFound, gin.H{"error": err.Error()})
			return
		default:
			ctx.JSON(http.StatusInternalServerError, gin.H{"error": "failed to fetch student"})
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
		case "siswa tidak ditemukan":
			ctx.JSON(http.StatusNotFound, gin.H{"error": err.Error()})
			return
		case "email sudah terdaftar":
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
		case "siswa tidak ditemukan":
			ctx.JSON(http.StatusNotFound, gin.H{"error": err.Error()})
			return
		default:
			ctx.JSON(http.StatusInternalServerError, gin.H{"error": "failed to delete student"})
			return
		}
	}

	ctx.Status(http.StatusNoContent)
}

// GetMyStudent gets the student registration for the current user
func (c *StudentController) GetMyStudent(ctx *gin.Context) {
	userID, exists := ctx.Get("user_id")
	if !exists {
		ctx.JSON(http.StatusUnauthorized, gin.H{"error": "user not authenticated"})
		return
	}

	student, err := c.service.GetStudentByUserID(userID.(string))
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	if student == nil {
		ctx.JSON(http.StatusNotFound, gin.H{"error": "no registration found for this user"})
		return
	}

	ctx.JSON(http.StatusOK, student)
}
