const express = require('express');
const {getUsers, getUser, updateUser, deleteUser} = require('../Controllers/Users.controller')
let router = express.Router();

router.get('/', getUsers)
router.get('/:id', getUser) 
router.put('/update/:id', updateUser)
router.delete('/delete/:id', deleteUser)

module.exports = router;