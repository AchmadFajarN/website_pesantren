package models

import (
	"time"

	"github.com/go-playground/validator/v10"
)

// Article represents the article model
type Article struct {
	ID     int64     `json:"id"`
	Title  string    `json:"title" validate:"required"`
	Header string    `json:"header" validate:"required"`
	Date   time.Time `json:"date"`
	Author string    `json:"author" validate:"required"`
	Body   string    `json:"body" validate:"required"`
	Photo  string    `json:"photo" validate:"omitempty,url"`
}

// ValidateArticle validates the article data
func ValidateArticle(article *Article) error {
	validate := validator.New()

	// Set default date if not provided
	if article.Date.IsZero() {
		article.Date = time.Now()
	}

	return validate.Struct(article)
}
