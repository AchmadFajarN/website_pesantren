package controllers

import (
	"net/http"
	"website_pesantren/models"
	"website_pesantren/services"

	"github.com/gin-gonic/gin"
)

type AuthController struct {
	service *services.AuthService
}

func NewAuthController(service *services.AuthService) *AuthController {
	return &AuthController{
		service: service,
	}
}

// Register handles user registration
func (c *AuthController) Register(ctx *gin.Context) {
	var req models.RegisterRequest
	if err := ctx.ShouldBindJSON(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"error":   "Invalid request format",
			"details": err.Error(),
		})
		return
	}

	user, err := c.service.Register(&req)
	if err != nil {
		status := http.StatusBadRequest
		if err.Error() == "username sudah terdaftar" || err.Error() == "email sudah terdaftar" {
			status = http.StatusConflict
		}
		ctx.JSON(status, gin.H{
			"error": err.Error(),
		})
		return
	}

	ctx.JSON(http.StatusCreated, user)
}

// Login handles user authentication and returns JWT token
func (c *AuthController) Login(ctx *gin.Context) {
	var req models.LoginRequest
	if err := ctx.ShouldBindJSON(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"error":   "Invalid request format",
			"details": err.Error(),
		})
		return
	}

	response, err := c.service.Login(&req)
	if err != nil {
		status := http.StatusUnauthorized
		if err.Error() == "username atau password salah" {
			status = http.StatusUnauthorized
		} else {
			status = http.StatusInternalServerError
		}
		ctx.JSON(status, gin.H{
			"error": err.Error(),
		})
		return
	}

	ctx.JSON(http.StatusOK, response)
}
