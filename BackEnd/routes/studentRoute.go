package routes

import (
	"website_pesantren/controllers"

	"github.com/gin-gonic/gin"
)

// SetupStudentRoutes configures all student routes
func SetupStudentRoutes(router *gin.RouterGroup, controller *controllers.StudentController) {
	students := router.Group("/students")
	{
		students.POST("", controller.CreateStudent)
		students.GET("", controller.GetAllStudents)
		students.GET("/:nomor", controller.GetStudentByNomor)
		students.PUT("/:nomor", controller.UpdateStudent)
		students.DELETE("/:nomor", controller.DeleteStudent)
	}
}
