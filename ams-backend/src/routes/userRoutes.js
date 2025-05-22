const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
//Endpoint
router.post('/register', userController.registerUser);

module.exports = router;