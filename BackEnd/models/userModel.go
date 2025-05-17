package models

import (
	"database/sql"
	"encoding/json"
	"time"

	"github.com/google/uuid"
	"golang.org/x/crypto/bcrypt"
)

type User struct {
	ID          string         `json:"id"`
	Username    string         `json:"username"`
	Password    string         `json:"-"` // Password won't be included in JSON
	Email       string         `json:"email"`
	Role        string         `json:"role"`
	CreatedAt   time.Time      `json:"created_at"`
	StudentID   sql.NullString `json:"student_id,omitempty"` // Reference to student registration
	LastLoginAt sql.NullTime   `json:"last_login_at,omitempty"`
}

// MarshalJSON implements custom JSON marshaling for User
func (u *User) MarshalJSON() ([]byte, error) {
	type Alias User
	aux := &struct {
		LastLoginAt *time.Time `json:"last_login_at,omitempty"`
		*Alias
	}{
		Alias: (*Alias)(u),
	}
	if u.LastLoginAt.Valid {
		aux.LastLoginAt = &u.LastLoginAt.Time
	}
	return json.Marshal(aux)
}

type LoginRequest struct {
	Username string `json:"username" binding:"required"`
	Password string `json:"password" binding:"required"`
}

type RegisterRequest struct {
	Username string `json:"username" binding:"required"`
	Password string `json:"password" binding:"required"`
	Email    string `json:"email" binding:"required,email"`
}

type LoginResponse struct {
	Token string `json:"token"`
	User  User   `json:"user"`
}

// NewUser creates a new user with the given username, password and email
func NewUser(username, password, email string) (*User, error) {
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return nil, err
	}

	return &User{
		ID:        uuid.New().String(),
		Username:  username,
		Password:  string(hashedPassword),
		Email:     email,
		Role:      "user", // Default role
		CreatedAt: time.Now(),
		LastLoginAt: sql.NullTime{
			Valid: false,
		},
	}, nil
}

func (u *User) ValidatePassword(password string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(u.Password), []byte(password))
	return err == nil
}
