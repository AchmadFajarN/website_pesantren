package services

import (
	"fmt"
	"website_pesantren/auth"
	"website_pesantren/models"
	"website_pesantren/repositories"
)

type AuthService struct {
	userRepo *repositories.UserRepository
}

func NewAuthService(userRepo *repositories.UserRepository) *AuthService {
	return &AuthService{
		userRepo: userRepo,
	}
}

func (s *AuthService) Register(req *models.RegisterRequest) (*models.User, error) {
	// Check if username exists
	existingUser, err := s.userRepo.FindByUsername(req.Username)
	if err != nil {
		return nil, fmt.Errorf("error checking username: %v", err)
	}
	if existingUser != nil {
		return nil, fmt.Errorf("username sudah terdaftar")
	}

	// Check if email exists
	existingEmail, err := s.userRepo.FindByEmail(req.Email)
	if err != nil {
		return nil, fmt.Errorf("error checking email: %v", err)
	}
	if existingEmail != nil {
		return nil, fmt.Errorf("email sudah terdaftar")
	}

	// Create new user
	user, err := models.NewUser(req.Username, req.Password, req.Email)
	if err != nil {
		return nil, fmt.Errorf("error creating user: %v", err)
	}

	// Save to database
	err = s.userRepo.Create(user)
	if err != nil {
		return nil, fmt.Errorf("error saving user: %v", err)
	}

	user.Password = "" // Clear password before returning
	return user, nil
}

func (s *AuthService) Login(req *models.LoginRequest) (*models.LoginResponse, error) {
	// Find user by username
	user, err := s.userRepo.FindByUsername(req.Username)
	if err != nil {
		return nil, fmt.Errorf("error finding user: %v", err)
	}
	if user == nil {
		return nil, fmt.Errorf("username atau password salah")
	}

	// Validate password
	if !user.ValidatePassword(req.Password) {
		return nil, fmt.Errorf("username atau password salah")
	}

	// Generate JWT token
	token, err := auth.GenerateToken(user.ID, user.Username, user.Role)
	if err != nil {
		return nil, fmt.Errorf("error generating token: %v", err)
	}

	// Update last login time
	err = s.userRepo.UpdateLastLogin(user.ID)
	if err != nil {
		// Non-critical error, just log it
		fmt.Printf("error updating last login: %v\n", err)
	}

	user.Password = "" // Clear password before returning
	return &models.LoginResponse{
		Token: token,
		User:  *user,
	}, nil
}
