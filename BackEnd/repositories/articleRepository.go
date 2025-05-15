package repositories

import (
	"database/sql"

	"website_pesantren/models"
)

// ArticleRepository handles all database operations for articles
type ArticleRepository struct {
	db *sql.DB
}

// NewArticleRepository creates a new article repository instance
func NewArticleRepository(db *sql.DB) *ArticleRepository {
	return &ArticleRepository{db: db}
}

// Create inserts a new article into the database
func (r *ArticleRepository) Create(article *models.Article) (*models.Article, error) {
	query := `
		INSERT INTO articles (title, header, date, author, body, photo)
		VALUES ($1, $2, $3, $4, $5, $6)
		RETURNING id, title, header, date, author, body, photo`

	var result models.Article
	err := r.db.QueryRow(
		query,
		article.Title,
		article.Header,
		article.Date,
		article.Author,
		article.Body,
		article.Photo,
	).Scan(
		&result.ID,
		&result.Title,
		&result.Header,
		&result.Date,
		&result.Author,
		&result.Body,
		&result.Photo,
	)

	if err != nil {
		return nil, err
	}
	return &result, nil
}

// FindAll retrieves articles with pagination ordered by date
func (r *ArticleRepository) FindAll(offset, limit int) ([]models.Article, int, error) {
	// Get total count
	var total int
	err := r.db.QueryRow("SELECT COUNT(*) FROM articles").Scan(&total)
	if err != nil {
		return nil, 0, err
	}

	// Get paginated articles
	query := `
		SELECT id, title, header, date, author, body, photo
		FROM articles
		ORDER BY date DESC
		LIMIT $1 OFFSET $2`

	rows, err := r.db.Query(query, limit, offset)
	if err != nil {
		return nil, 0, err
	}
	defer rows.Close()

	var articles []models.Article
	for rows.Next() {
		var article models.Article
		err := rows.Scan(
			&article.ID,
			&article.Title,
			&article.Header,
			&article.Date,
			&article.Author,
			&article.Body,
			&article.Photo,
		)
		if err != nil {
			return nil, 0, err
		}
		articles = append(articles, article)
	}

	if err = rows.Err(); err != nil {
		return nil, 0, err
	}

	return articles, total, nil
}

// FindByID retrieves an article by its ID
func (r *ArticleRepository) FindByID(id int64) (*models.Article, error) {
	var article models.Article
	err := r.db.QueryRow("SELECT id, title, header, date, author, body, photo FROM articles WHERE id = $1", id).Scan(
		&article.ID,
		&article.Title,
		&article.Header,
		&article.Date,
		&article.Author,
		&article.Body,
		&article.Photo,
	)
	if err == sql.ErrNoRows {
		return nil, nil
	}
	if err != nil {
		return nil, err
	}
	return &article, nil
}

// Update modifies an existing article
func (r *ArticleRepository) Update(id int64, article *models.Article) (*models.Article, error) {
	query := `
		UPDATE articles
		SET title = $1, header = $2, date = $3, author = $4, body = $5, photo = $6
		WHERE id = $7
		RETURNING id, title, header, date, author, body, photo`

	var result models.Article
	err := r.db.QueryRow(
		query,
		article.Title,
		article.Header,
		article.Date,
		article.Author,
		article.Body,
		article.Photo,
		id,
	).Scan(
		&result.ID,
		&result.Title,
		&result.Header,
		&result.Date,
		&result.Author,
		&result.Body,
		&result.Photo,
	)

	if err == sql.ErrNoRows {
		return nil, nil
	}
	if err != nil {
		return nil, err
	}
	return &result, nil
}

// Delete removes an article from the database
func (r *ArticleRepository) Delete(id int64) error {
	result, err := r.db.Exec("DELETE FROM articles WHERE id = $1", id)
	if err != nil {
		return err
	}

	rowsAffected, err := result.RowsAffected()
	if err != nil {
		return err
	}

	if rowsAffected == 0 {
		return sql.ErrNoRows
	}

	return nil
}
