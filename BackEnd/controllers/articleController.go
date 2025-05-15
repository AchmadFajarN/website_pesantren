package controllers

import (
	"net/http"
	"strconv"
	"website_pesantren/models"
	"website_pesantren/services"

	"github.com/gin-gonic/gin"
)

// ArticleController handles HTTP requests for articles
type ArticleController struct {
	service *services.ArticleService
}

// NewArticleController creates a new article controller instance
func NewArticleController(service *services.ArticleService) *ArticleController {
	return &ArticleController{
		service: service,
	}
}

// CreateArticle handles the creation of a new article
func (c *ArticleController) CreateArticle(ctx *gin.Context) {
	var article models.Article
	if err := ctx.ShouldBindJSON(&article); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request payload"})
		return
	}

	newArticle, err := c.service.CreateArticle(&article)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	ctx.JSON(http.StatusCreated, newArticle)
}

// GetAllArticles handles retrieving all articles with pagination
func (c *ArticleController) GetAllArticles(ctx *gin.Context) {
	// Get pagination parameters from query string
	page, err := strconv.Atoi(ctx.DefaultQuery("page", "1"))
	if err != nil || page < 1 {
		page = 1
	}

	limit, err := strconv.Atoi(ctx.DefaultQuery("limit", "10"))
	if err != nil || limit < 1 {
		limit = 10
	}

	articles, total, err := c.service.GetAllArticles(page, limit)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch articles"})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{
		"data": articles,
		"pagination": gin.H{
			"current_page": page,
			"per_page":     limit,
			"total":        total,
			"total_pages":  (total + limit - 1) / limit,
		},
	})
}

// GetArticleByID handles retrieving a single article by ID
func (c *ArticleController) GetArticleByID(ctx *gin.Context) {
	id, err := strconv.ParseInt(ctx.Param("id"), 10, 64)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid article ID"})
		return
	}

	article, err := c.service.GetArticleByID(id)
	if err != nil {
		if err.Error() == "article not found" {
			ctx.JSON(http.StatusNotFound, gin.H{"error": "Article not found"})
			return
		}
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch article"})
		return
	}

	ctx.JSON(http.StatusOK, article)
}

// UpdateArticle handles updating an existing article
func (c *ArticleController) UpdateArticle(ctx *gin.Context) {
	id, err := strconv.ParseInt(ctx.Param("id"), 10, 64)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid article ID"})
		return
	}

	var article models.Article
	if err := ctx.ShouldBindJSON(&article); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request payload"})
		return
	}

	updatedArticle, err := c.service.UpdateArticle(id, &article)
	if err != nil {
		if err.Error() == "article not found" {
			ctx.JSON(http.StatusNotFound, gin.H{"error": "Article not found"})
			return
		}
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, updatedArticle)
}

// DeleteArticle handles deleting an article
func (c *ArticleController) DeleteArticle(ctx *gin.Context) {
	id, err := strconv.ParseInt(ctx.Param("id"), 10, 64)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid article ID"})
		return
	}

	if err := c.service.DeleteArticle(id); err != nil {
		if err.Error() == "article not found" {
			ctx.JSON(http.StatusNotFound, gin.H{"error": "Article not found"})
			return
		}
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete article"})
		return
	}

	ctx.Status(http.StatusNoContent)
}
