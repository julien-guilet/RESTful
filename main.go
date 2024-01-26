package main

import (
    "github.com/gin-gonic/gin"
)

// main is the entry point for the application.
func main() {
	router := gin.Default()

	// router.Use(cors.Default())
	router.GET("/users", readUser)
	router.POST("/users", createUser)
	router.PUT("/users/:id", updateUser)
	router.DELETE("/users/:id", deleteUser)


	router.Run()
}


