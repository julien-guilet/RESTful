package main

import (
	"net/http"
    "github.com/gin-gonic/gin"
)

type User struct {
	ID       string
	Username string
	Email    string
}

var users = []User{
	{ID: "1", Username: "user1", Email: "user1@gmail.com"},
	{ID: "2", Username: "user2", Email: "user2@gmail.com"},
}

func createUser(c *gin.Context) {
	var user User
	c.BindJSON(&user)
	users = append(users, user)
}

func readUser(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, users)
}

func updateUser(c *gin.Context) {
	id := c.Param("id")
	var user User
	c.BindJSON(&user)
	for i, u := range users {
		if u.ID == id {
			users[i] = user
		}
	}
}

func deleteUser(c *gin.Context) {
	id := c.Param("id")
	var user User
	c.BindJSON(&user)
	for i, u := range users {
		if u.ID == id {
			users = append(users[:i], users[i+1:]...)
		}
	}
}