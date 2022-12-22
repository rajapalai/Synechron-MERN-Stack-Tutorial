const express = require('express');
const router = express.Router();
const UserController = require('../controller/user-controller');


router.get('/',UserController.getAllUser);

router.get('/:id', UserController.getUserById);

router.post('/',UserController.AddNewUser);

router.put('/:id',UserController.UpdateUserById);

router.delete('/:id',UserController.DeleteUserById);

module.exports = router;