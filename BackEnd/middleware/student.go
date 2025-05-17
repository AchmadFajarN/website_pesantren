package middleware

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// UserStudentOwnership checks if the student registration belongs to the current user
func UserStudentOwnership() gin.HandlerFunc {
	return func(c *gin.Context) {
		userID, exists := c.Get("user_id")
		if !exists {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "User not authenticated"})
			c.Abort()
			return
		}

		// Get student_id from request context (set by previous handlers)
		studentUserID, exists := c.Get("student_user_id")
		if !exists {
			c.Next() // If no student_user_id is set (e.g., for POST requests), continue
			return
		}

		// Check if the student belongs to the current user
		if userID != studentUserID {
			c.JSON(http.StatusForbidden, gin.H{"error": "Access denied to this student's data"})
			c.Abort()
			return
		}

		c.Next()
	}
}
