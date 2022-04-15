const express = require("express");
const router = express.Router();
const authCon = require('../controller/authControllers/index')

router.get('/get_all_user',authCon.authGetAllUsers)

router.post('/create_user',authCon.authCreateUser)

router.get('/users/:id',authCon.authGetUser)

router.delete('/users/:id',authCon.authDeleteUser)

router.put('/users/:id',authCon.authPutUser)

module.exports = router