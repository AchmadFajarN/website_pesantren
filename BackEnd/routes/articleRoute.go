package routes

import (
	"website_pesantren/controllers"

	"github.com/gin-gonic/gin"
)

// SetupArticleRoutes configures all article routes
func SetupArticleRoutes(router *gin.RouterGroup, controller *controllers.ArticleController) {
	articles := router.Group("/articles")
	{
		articles.POST("", controller.CreateArticle)
		articles.GET("", controller.GetAllArticles)
		articles.GET("/:id", controller.GetArticleByID)
		articles.PUT("/:id", controller.UpdateArticle)
		articles.DELETE("/:id", controller.DeleteArticle)
	}
}
