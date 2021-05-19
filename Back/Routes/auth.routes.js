const express = require('express');
const {loginUser, createUser} = require('../Controllers/Auth.controller')
let router = express.Router();

router.post('/login', loginUser)
router.post('/register', createUser)

module.exports = router;