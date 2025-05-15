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

		// Protected routes
		protected := api.Group("")
		protected.Use(middleware.AuthMiddleware())
		{
			// Articles routes
			articles := protected.Group("/articles")
			{
				articles.GET("/", articleController.GetAllArticles)
				articles.GET("/:id", articleController.GetArticleByID)

				// Admin only routes
				adminArticles := articles.Group("")
				adminArticles.Use(middleware.AdminOnly())
				{
					adminArticles.POST("/", articleController.CreateArticle)
					adminArticles.PUT("/:id", articleController.UpdateArticle)
					adminArticles.DELETE("/:id", articleController.DeleteArticle)
				}
			}

			// Students routes
			students := protected.Group("/students")
			{
				students.GET("/", studentController.GetAllStudents)
				students.GET("/:nomor", studentController.GetStudentByNomor)

				// Admin only routes
				adminStudents := students.Group("")
				adminStudents.Use(middleware.AdminOnly())
				{
					adminStudents.POST("/", studentController.CreateStudent)
					adminStudents.PUT("/:nomor", studentController.UpdateStudent)
					adminStudents.DELETE("/:nomor", studentController.DeleteStudent)
				}
			}
		}
	}
}
