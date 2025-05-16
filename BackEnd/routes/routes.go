package routes

import (
	"website_pesantren/controllers"
	"website_pesantren/middleware"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(
	r *gin.Engine,
	authController *controllers.AuthController,
	articleController *controllers.ArticleController,
	studentController *controllers.StudentController,
) {
	// Public routes
	api := r.Group("/api")
	{
		// Auth routes
		auth := api.Group("/auth")
		{
			auth.POST("/register", authController.Register)
			auth.POST("/login", authController.Login)
		}

		// Public article routes
		articles := api.Group("/articles")
		{
			articles.GET("/", articleController.GetAllArticles)
			articles.GET("/:id", articleController.GetArticleByID)
		}

		// Protected routes
		protected := api.Group("")
		protected.Use(middleware.AuthMiddleware())
		{
			// Protected article routes (admin only)
			adminArticles := protected.Group("/articles")
			adminArticles.Use(middleware.AdminOnly())
			{
				adminArticles.POST("/", articleController.CreateArticle)
				adminArticles.PUT("/:id", articleController.UpdateArticle)
				adminArticles.DELETE("/:id", articleController.DeleteArticle)
			}

			// Students routes
			students := protected.Group("/students")
			{
				// User routes (require auth)
				students.POST("/", studentController.CreateStudent)              // Register new student
				students.GET("/my-registration", studentController.GetMyStudent) // Get own registration

				// Admin only routes
				adminStudents := students.Group("")
				adminStudents.Use(middleware.AdminOnly())
				{
					adminStudents.GET("/", studentController.GetAllStudents) // List all students
					adminStudents.GET("/:nomor", studentController.GetStudentByNomor)
					adminStudents.PUT("/:nomor", studentController.UpdateStudent)
					adminStudents.DELETE("/:nomor", studentController.DeleteStudent)
				}
			}
		}
	}
}
