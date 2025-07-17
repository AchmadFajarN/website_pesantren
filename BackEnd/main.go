package main

import (
	"log"
	"website_pesantren/config"
	"website_pesantren/controllers"
	"website_pesantren/repositories"
	"website_pesantren/routes"
	"website_pesantren/services"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	// Initialize database connection
	db, err := config.InitDB()
	if err != nil {
		log.Fatalf("Failed to connect to database: %v", err)
	}
	defer db.Close()
	// Initialize repositories
	articleRepo := repositories.NewArticleRepository(db)
	studentRepo := repositories.NewStudentRepository(db)
	userRepo := repositories.NewUserRepository(db)

	// Initialize services
	articleService := services.NewArticleService(articleRepo)
	studentService := services.NewStudentService(studentRepo)
	authService := services.NewAuthService(userRepo)

	// Initialize controllers
	articleController := controllers.NewArticleController(articleService)
	studentController := controllers.NewStudentController(studentService)
	authController := controllers.NewAuthController(authService)

	// Create new Gin router
	router := gin.Default()

	// Setup CORS
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"*"}
	config.AllowMethods = []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"}
	config.AllowHeaders = []string{"Origin", "Content-Type", "Authorization"}
	router.Use(cors.New(config))
	// Setup all routes
	routes.SetupRoutes(router, authController, articleController, studentController)

	// Start server
	if err := router.Run(":8080"); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}
