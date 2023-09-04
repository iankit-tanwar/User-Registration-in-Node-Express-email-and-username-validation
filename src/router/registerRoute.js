const express = require("express")
const { registerCotroller } = require("../controller/registerController")


const registerRoute = express("router")


registerRoute.post('/register',registerCotroller)


module.exports = {registerRoute}