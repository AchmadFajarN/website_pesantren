package services

import (
	"fmt"
	"website_pesantren/models"
	"website_pesantren/repositories"
)

// ArticleService handles business logic for articles
type ArticleService struct {
	repo *repositories.ArticleRepository
}

// NewArticleService creates a new article Service instance
func NewArticleService(repo *repositories.ArticleRepository) *ArticleService {
	return &ArticleService{
		repo: repo,
	}
}

// CreateArticle creates a new article after validating the input
func (s *ArticleService) CreateArticle(article *models.Article) (*models.Article, error) {
	// Validate article
	if err := models.ValidateArticle(article); err != nil {
		return nil, fmt.Errorf("validation error: %v", err)
	}

	// Create article in repository
	createdArticle, err := s.repo.Create(article)
	if err != nil {
		return nil, fmt.Errorf("failed to create article: %v", err)
	}

	return createdArticle, nil
}

// GetAllArticles retrieves all articles with pagination
func (s *ArticleService) GetAllArticles(page, limit int) ([]models.Article, int, error) {
	offset := (page - 1) * limit
	articles, total, err := s.repo.FindAll(offset, limit)
	if err != nil {
		return nil, 0, fmt.Errorf("failed to fetch articles: %v", err)
	}
	return articles, total, nil
}

// GetArticleByID retrieves an article by its ID
func (s *ArticleService) GetArticleByID(id int64) (*models.Article, error) {
	article, err := s.repo.FindByID(id)
	if err != nil {
		return nil, fmt.Errorf("failed to fetch article: %v", err)
	}
	if article == nil {
		return nil, fmt.Errorf("article not found")
	}
	return article, nil
}

// UpdateArticle updates an existing article after validating the input
func (s *ArticleService) UpdateArticle(id int64, article *models.Article) (*models.Article, error) {
	// Validate article
	if err := models.ValidateArticle(article); err != nil {
		return nil, fmt.Errorf("validation error: %v", err)
	}

	// Update article in repository
	updatedArticle, err := s.repo.Update(id, article)
	if err != nil {
		return nil, fmt.Errorf("failed to update article: %v", err)
	}
	if updatedArticle == nil {
		return nil, fmt.Errorf("article not found")
	}

	return updatedArticle, nil
}

// DeleteArticle removes an article by its ID
func (s *ArticleService) DeleteArticle(id int64) error {
	// Check if article exists
	article, err := s.repo.FindByID(id)
	if err != nil {
		return fmt.Errorf("failed to fetch article: %v", err)
	}
	if article == nil {
		return fmt.Errorf("article not found")
	}

	// Delete article from repository
	if err := s.repo.Delete(id); err != nil {
		return fmt.Errorf("failed to delete article: %v", err)
	}

	return nil
}
