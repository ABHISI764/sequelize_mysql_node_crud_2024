const express = require('express');
const { createUser, getUsers, getUserById, updateUser, deleteUsers } = require('../controller/userController');

const router = express.Router();


// Create a new user
router.post('/add',createUser)

// Get all users
router.get('/getallusers',getUsers);


//Get a user by ID
router.get('/getuser/:id',getUserById)


//Update a user by ID
router.put('/update/:id',updateUser)

//Delete a user by ID
router.delete('/deletuser/:id',deleteUsers)


module.exports = {router}
